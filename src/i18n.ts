import { moment } from 'obsidian';

interface ExportDocxStrings {
	exportCurrentNoteCommand: string;
	exportToDocxMenuItem: string;
	exportNoActiveNoteNotice: string;
	exportSuccessNotice: (basename: string) => string;
	exportFailureNotice: (message: string) => string;
}

const en: ExportDocxStrings = {
	exportCurrentNoteCommand: 'Export current note to DOCX',
	exportToDocxMenuItem: 'Export to DOCX',
	exportNoActiveNoteNotice: 'No active Markdown note to export.',
	exportSuccessNotice: (basename) => `Exported: ${basename}.docx`,
	exportFailureNotice: (message) => `DOCX export failed: ${message}`,
};

const ja: ExportDocxStrings = {
	exportCurrentNoteCommand: '現在のノートをDOCXにエクスポート',
	exportToDocxMenuItem: 'DOCXにエクスポート',
	exportNoActiveNoteNotice: 'アクティブなMarkdownノートがありません。',
	exportSuccessNotice: (basename) => `エクスポート完了: ${basename}.docx`,
	exportFailureNotice: (message) => `DOCXエクスポート失敗: ${message}`,
};

export function t<K extends keyof ExportDocxStrings>(key: K): ExportDocxStrings[K] {
	const locale = moment.locale();
	return ({ en, ja }[locale] ?? en)[key];
}
