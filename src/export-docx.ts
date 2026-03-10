import { Notice, TFile } from 'obsidian';
import { md2docx } from '@adobe/helix-md2docx';
import stylesXML from '@adobe/helix-md2docx/src/mdast2docx/template/word/styles.xml';
import type ExportToDocxPlugin from './main';
import { t } from './i18n';

export async function exportNoteToDocx(plugin: ExportToDocxPlugin, file: TFile): Promise<void> {
	const markdown = await plugin.app.vault.read(file);
	const outputPath = file.path.replace(/\.md$/, '.docx');

	try {
		const buffer = await md2docx(markdown, { log: console, stylesXML });
		await plugin.app.vault.adapter.writeBinary(outputPath, new Uint8Array(buffer).buffer);
		new Notice(t('exportSuccessNotice')(file.basename));
	} catch (e) {
		const message = e instanceof Error ? e.message : String(e);
		new Notice(t('exportFailureNotice')(message));
	}
}
