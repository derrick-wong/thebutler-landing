const baseURL = 'demo.once-ui.com'

// default customization applied to the HTML in the main layout.tsx
const style = {
    theme:       'dark',        // dark | light
    neutral:     'gray',       // sand | gray | slate
    brand:       'pink',     // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
    accent:      'cyan',      // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
    solid:       'contrast',    // color | contrast
    solidStyle:  'flat',        // flat | plastic
    border:      'rounded',     // rounded | playful | conservative
    surface:     'translucent', // filled | translucent
    transition:  'macro',         // all | micro | macro
    scaling:     '100',         // 90 | 95 | 100 | 105 | 110
}

// default metadata
const meta = {
    title: 'The Būtler',
    description: 'Built to help moms by dads.'
}


// default open graph data
const og = {
    title: 'The Būtler',
    description: 'Built to help moms by dads.',
    type: 'website'
}

// default schema data
const schema = {
    logo: '',
    type: 'Organization',
    title: 'The Būtler',
    description: 'Built to help moms by dads.',
    email: 'support@thebutlerapp.com'
}

// social links
const social = {
}

export { baseURL, style, meta, og, schema, social };