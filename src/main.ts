import { MarkdownView, Notice, Plugin, TFile } from 'obsidian';
import { exportNoteToDocx } from './export-docx';
import { t } from './i18n';

export default class ExportToDocxPlugin extends Plugin {
	async onload() {
		this.addCommand({
			id: 'export',
			name: t('exportCurrentNoteCommand'),
			checkCallback: (checking: boolean) => {
				const markdownView = this.app.workspace.getActiveViewOfType(MarkdownView);
				if (!markdownView) return false;
				if (!checking) {
					const file = markdownView.file;
					if (file) {
						void exportNoteToDocx(this, file);
					} else {
						new Notice(t('exportNoActiveNoteNotice'));
					}
				}
				return true;
			},
		});

		this.registerEvent(
			this.app.workspace.on('file-menu', (menu, abstractFile) => {
				if (!(abstractFile instanceof TFile) || abstractFile.extension !== 'md') return;
				menu.addItem((item) => {
					item.setTitle(t('exportToDocxMenuItem'))
						.setIcon('file-text')
						.onClick(() => void exportNoteToDocx(this, abstractFile));
				});
			}),
		);
	}

	onunload() {}
}
