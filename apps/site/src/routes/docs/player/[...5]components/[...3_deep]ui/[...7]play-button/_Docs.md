---
description: This component is used to play and pause media.
---

## Usage

The `<vds-play-button>` component will toggle the `paused` state of media as it's pressed by
dispatching a `vds-play-request:ignore`, and `vds-pause-request:ignore` event to the media
controller.

<slot name="usage" />

```css copy
/* Hide pause text when media _is_ paused. */
vds-media[paused] .media-pause {
  display: none;
}

/* Hide play text when media _is not_ paused. */
vds-media:not([paused]) .media-play {
  display: none;
}
```

## Styling

Here's a simple styled `<vds-play-button>` example containing a play and pause icon:

:::admonition type="tip"
You can extend this example by adding a replay SVG icon, and showing it whilst hiding the play icon
when the `media-ended` attribute is present.
:::

<slot name="styling" />

```css copy
vds-play-button {
  position: relative;
  width: 24px;
  height: 24px;
  border-radius: 4px;
  cursor: pointer;
  color: white;
}

vds-play-button > svg {
  /** `absolute` so icons are placed on top of each other. */
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 1;
  transition: opacity ease 150ms;
}

vds-media[paused] .media-pause-icon {
  opacity: 0;
}

vds-media:not([paused]) .media-play-icon {
  opacity: 0;
}
```
