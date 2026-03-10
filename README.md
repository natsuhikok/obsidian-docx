# Export to DOCX

An [Obsidian](https://obsidian.md) plugin that exports the currently open Markdown note to a `.docx` file in the same folder.

## Usage

1. Open a Markdown note in Obsidian.
2. Open the command palette (`Cmd/Ctrl + P`).
3. Run **Export current note to DOCX**.
4. A `.docx` file is created next to the original `.md` file. Running the command again silently overwrites it.

The command only appears in the palette when a Markdown view is active.

## Requirements

- Desktop only (the underlying library uses Node built-ins unavailable on mobile).
- Obsidian 0.15.0 or later.

## Development

```bash
npm install
npm run build   # or: npm run dev  (watch mode)
```

Copy `main.js` and `manifest.json` to `<Vault>/.obsidian/plugins/export-to-docx/`, reload Obsidian, and enable the plugin under **Settings → Community plugins**.
