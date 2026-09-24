import * as DefuddleFull from "defuddle/full";

// Defuddle's full bundle is UMD/CommonJS. Browsers can consume its named
// export directly, while Node exposes the same function on the default export.
export const createMarkdownContent =
	DefuddleFull.createMarkdownContent ??
	(
		DefuddleFull as unknown as {
			default: typeof DefuddleFull;
		}
	).default.createMarkdownContent;
