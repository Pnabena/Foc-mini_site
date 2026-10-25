# Version 3 validation

25 October 2026.

## Completed

- Vite production build with pinned React and font dependencies.
- Desktop visual inspection of the actual 3D hero and ministry layouts.
- Phone and tablet viewport inspection using 390px and 768px preview frames. Their content widths (375px and 753px with scrollbars) matched their scroll widths, with no page-level horizontal overflow.
- Mobile menu opens, shows the four anchor links and closes after selecting a section.
- Keyboard activation opens the film viewer, including the correctly labelled local file selector.
- Escape closes the media dialog.
- Real photo opens in the larger viewer; its image decoded at 1800 × 1013 pixels.
- Manual gallery navigation sets the paused state.
- Giving button opens the information dialog, with no payment collection.
- Existing campaign uncertainty labels, £215,000 completion requirement and independent IFCS wording retained.
- Supplied media is local. Fonts are bundled. No third-party media player or analytics requests are added.

## Scope and limits

- Browser checks used Chromium. Physical iOS/Android devices, Safari and Firefox still need a release check.
- Local file-selection handlers are retained from version 2. New file selection and actual video playback were not re-run in version 3; no final Fellowship film was supplied. Validate final codecs, sound, captions, transcripts and hover previews when films arrive.
- Reduced-motion and background-pause paths were reviewed in code; this is not a full accessibility audit.
- Native dialogs provide focus containment and Escape support. Final screen-reader and assistive-technology testing remains part of release QA.
- A browser-extension metadata warning was observed during automation. It did not prevent the media viewer from opening; it is not emitted by the React application.
- No CMS, persistent upload, backend or payment integration is included.

## Quick review when content arrives

1. Open each photo and film; check its crop, full-size view, accurate description and permission.
2. Check muted preview playback, explicit sound controls and stopping on close/Escape.
3. Check keyboard navigation, system reduced motion and a touch device.
4. Confirm campaign figures, giving route and policies.
5. Set `campaign.preview` to false after approval and rebuild.
