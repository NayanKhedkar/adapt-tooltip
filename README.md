adapt-tooltip
===========

An extension tooltip is often used to specify extra information about something when the user moves the mouse pointer over an element.

<img src="https://github.com/NayanKhedkar/images/blob/master/assets/tooltip.gif?raw=true" alt="tooltip.gif">

Installation
============
## Installation
First, be sure to install the [Adapt Command Line Interface](https://github.com/cajones/adapt-cli), then from the command line run:-

    `adapt install adapt-tooltip`

This extension can also be installed by adding the extension to the adapt.json file before running `adapt install`:

    `"adapt-tooltip": "*"`

=========
## Key Features

1.It's responsive. It relies on a maximum width value when viewed on large screens, adopts to narrow environments and picks the best viewable position relatively to the target (top, bottom; left, center, right);

2.It's mobile-friendly. It pops up when a call-to-action button is tapped and disappears when tapped on the tooltip itself;

3.It's HTML formatting capable. Need to write some words in italic or so? No problem, this will work out.

## How To Implement

Assign the attribute data-rel="tooltip" and data-title="Enter your tip here" to any of body tags in HTML file where you want the tooltip to pop up when called. Set title value with your tip (use <strong>, <em> etc. to distinguish text fragments, but avoid block elements).
*e.g.* `"<span data-title='tooltip text goes here' data-rel='tooltip' onmouseenter='tooltip.call(this)'>Tooltip over</span>"`

*To configure properties refer ./js/conf.js*

*A complete example of this extension settings can be found in the [example.json](https://github.com/NayanKhedkar/adapt-tooltip/blob/master/example.json) file.*

## Limitations

To be completed.

##Browser spec

This component has been tested to the standard Adapt browser specification.

##NOTE:It can be apply to any level of framework.
