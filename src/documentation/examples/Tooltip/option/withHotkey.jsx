import React from 'react';
import Tooltip from '@bufferapp/ui/Tooltip';
import Avatar from '@bufferapp/ui/Avatar';

/** With Hotkey */
export default function ExampleTooltip() {
  return (
    <Tooltip label="Tooltip example" position="right" hotkey="⌘+C">
      <Avatar
        src="https://pbs.twimg.com/profile_images/988613046510628866/Io1ZQUpy_400x400.jpg"
        alt="@joelgascoigne"
        size="medium"
      />
    </Tooltip>
  )
}
