const chordNotes = {
    C: {
        secDom: ["G7 M", "E7 m", "C7 M", "A7 m", "D7 M", "B7 m",],
        root: ["C M", "A m", "F M", "D m", "G M", "E m",],
        mInt: ["Eb M", "Ab M", "F m", "Bb M",],
        imagesecDom: ["./images/major7ths/G7 M.png", "./images/minor7ths/E7 m.png", "./images/major7ths/D7 M.png", "./images/minor7ths/B7 m.png", "./images/major7ths/D7 M.png", "./images/minor7ths/B7 m.png",],
        imageroot: ["./images/majorchords/C M.png", "./images/minorchords/A m.png", "./images/majorchords/F M.png", "./images/minorchords/D m.png", "./images/majorchords/G M.png", "./images/minorchords/E m.png",],
        imagemInt: ["./images/majorchords/Eb M.png", "./images/majorchords/Ab M.png", "./images/minorchords/F m.png", "./images/majorchords/Bb M.png",]
    },

    Db: {
        secDom: ["Ab7 M", "F7 m", "Db7 M", "Bb7 m", "Eb7 M", "C7 m",],
        root: ["Db M", "Bb m", "Gb M", "Eb m", "Ab M", "F m",],
        mInt: ["E M", "A M", "Gb m", "B M",],
        imagesecDom: ["./images/major7ths/Ab7 M.png", "./images/minor7ths/F7 m.png", "./images/major7ths/Db7 M.png", "./images/minor7ths/Bb7 m.png", "./images/major7ths/Eb7 M.png", "./images/minor7ths/C7 m.png"],
        imageroot: ["./images/majorchords/Db M.png", "./images/minorchords/Bb m.png", "./images/majorchords/Gb M.png","./images/minorchords/Eb m.png", "./images/majorchords/Ab M.png", "./images/minorchords/F m.png",],
        imagemInt: ["./images/majorchords/E M.png", "./images/majorchords/A M.png", "./images/minorchords/Gb m.png", "./images/majorchords/B M.png",]
    },

    D: {
        secDom: ["A7 M", "Gb7 m", "D7 M", "B7 m", "E7 M", "Db7 m",],
        root: ["D M", "B m", "G M", "E m", "A M", "Gb m",],
        mInt: ["F M", "Bb M", "G m", "C M",],
        imagesecDom: ["./images/major7ths/A7 M.png", "./images/minor7ths/Gb7 m.png","./images/major7ths/D7 M.png", "./images/minor7ths/B7 m.png", "./images/major7ths/E7 M.png", "./images/minor7ths/Db7 m.png" ],
        imageroot: [ "./images/majorchords/D M.png", "./images/minorchords/B m.png", "./images/majorchords/G M.png", "./images/minorchords/E m.png", "./images/majorchords/A M.png", "./images/minorchords/Gb m.png"],
        imagemInt: ["./images/majorchords/F M.png", "./images/majorchords/Bb M.png", "./images/minorchords/G m.png", "./images/majorchords/C M.png"]

    },

    Eb: {
        secDom: ["Bb7 M", "G7 m", "Eb7 M", "C7 m", "F7 M", "D7 m",],
        root: ["Eb M", "C m", "Ab M", "F m", "Bb M", "G m",],
        mInt: ["Gb M", "B M", "Ab m", "Db M",],
        imagesecDom: ["./images/major7ths/Bb7 M.png","./images/minor7ths/G7 m.png","./images/major7ths/Eb7 M.png","./images/minor7ths/C7 m.png", "./images/major7ths/F7 M.png","./images/minor7ths/D7 m.png",],
        imageroot: ["./images/majorchords/Eb M.png","./images/minorchords/C m.png","./images/majorchords/Ab M.png", "./images/minorchords/F m.png","./images/majorchords/Bb M.png","./images/minorchords/G m.png", ],
        imagemInt: ["./images/majorchords/Gb M.png","./images/majorchords/B M.png", "./images/minorchords/Ab m.png","./images/majorchords/Db M.png",],

    },

    E: {
        secDom: ["B7 M", "Ab7 m", "E7 M", "Db7 m", "Gb7 M", "Eb7 m",],
        root: ["E M", "Db m", "A M", "Gb m", "B M", "Ab m",],
        mInt: ["B M", "C M", "A m", "D M",],
        imagesecDom: ["./images/major7ths/B7 M.png","./images/minor7ths/Ab7 m.png","./images/major7ths/E7 M.png","./images/minor7ths/Db7 m.png", "./images/major7ths/Gb7 M.png","./images/minor7ths/Eb7 m.png",],
        imageroot: [ "./images/majorchords/E M.png", "./images/minorchords/Db m.png", "./images/majorchords/A M.png", "./images/minorchords/Gb m.png", "./images/majorchords/B M.png", "./images/minorchords/Ab m.png",],
        imagemInt: [ "./images/majorchords/B M.png", "./images/majorchords/C M.png", "./images/minorchords/A m.png", "./images/majorchords/D M.png",   ],

    },

    F: {
        secDom: ["C7 M", "A7 m", "F7 M", "D7 m", "G7 M", "E7 m",],
        root: ["F M", "D m", "Bb M", "G m", "C M", "A m",],
        mInt: ["Ab M", "Db M", "Bb m", "Eb M",],

        imagesecDom: ["./images/major7ths/C7 M.png","./images/minor7ths/A7 m.png","./images/major7ths/F7 M.png","./images/minor7ths/D7 m.png", "./images/major7ths/G7 M.png","./images/minor7ths/E7 m.png",],
        imageroot: ["./images/majorchords/F M.png", "./images/minorchords/D m.png", "./images/majorchords/Bb M.png", "./images/minorchords/G m.png", "./images/majorchords/C M.png", "./images/minorchords/A m.png",],
        imagemInt: ["./images/majorchords/Ab M.png", "./images/majorchords/Db M.png", "./images/minorchords/Chords/Bb m.png", "./images/majorchords/Eb M.png",  ],

    },

    Gb: {
        secDom: ["Db7 M", "Bb7 m", "Gb7 M", "Eb7 m", "Ab7 M", "B7 m",],
        root: ["Gb M", "Eb m", "B M", "Ab m", "Db M", "E m",],
        mInt: ["A M", "D M", "C m", "E M",],
        imagesecDom: ["./images/major7ths/Db7 M.png","./images/minor7ths/Bb7 m.png","./images/major7ths/Gb7 M.png","./images/minor7ths/Eb7 m.png", "./images/major7ths/Ab7 M.png","./images/minor7ths/B7 m.png",],
        imageroot: ["./images/majorchords/Gb M.png", "./images/minorchords/Eb m.png", "./images/majorchords/B M.png", "./images/minorchords/Ab m.png", "./images/majorchords/Db M.png", "./images/minorchords/E m.png",],
        imagemInt: ["./images/majorchords/A M.png", "./images/majorchords/D M.png", "./images/minorchords/C m.png", "./images/majorchords/E M.png",  ],

    },

    G: {
        secDom: ["D7 M", "B7 m", "G7 M", "E7 m", "A7 M", "Gb7 m",],
        root: ["G M", "E m", "C M", "A m", "D M", "B m",],
        mInt: ["Bb M", "Eb M", "C m", "F M",],
        imagesecDom: ["./images/major7ths/D7 M.png","./images/minor7ths/B7 m.png","./images/major7ths/G7 M.png","./images/minor7ths/E7 m.png", "./images/major7ths/A7 M.png","./images/minor7ths/Gb7 m.png",],
        imageroot: ["./images/majorchords/G M.png", "./images/minorchords/E m.png", "./images/majorchords/C M.png", "./images/minorchords/A m.png", "./images/majorchords/D M.png", "./images/minorchords/B m.png",  ],
        imagemInt: ["./images/majorchords/Bb M.png", "./images/majorchords/Eb M.png", "./images/minorchords/C m.png", "./images/majorchords/F M.png",  ],

    },

    Ab: {
        secDom: ["Eb7 M", "C7 m", "Ab7 M", "F7 m", "Bb7 M", "G7 m",],
        root: ["Ab M", "F m", "Db M", "Bb m", "Eb M", "C m",],
        mInt: ["B M", "E M", "Db m", "Gb M",],
        imagesecDom: ["./images/major7ths/Eb7 M.png", "./images/minor7ths/C7 m.png", "./images/major7ths/Ab7 M.png","./images/minor7ths/F7 m.png", "./images/major7ths/Bb7 M.png","./images/minor7ths/G7 m.png",],
        imageroot: ["./images/majorchords/Ab M.png", "./images/minorchords/F m.png", "./images/majorchords/Db M.png", "./images/minorchords/Bb m.png", "./images/majorchords/Eb M.png", "./images/minorchords/C m.png",],
        imagemInt: ["./images/majorchords/B M.png", "./images/majorchords/E M.png", "./images/minorchords/Db m.png", "./images/majorchords/Gb M.png",],

    },

    A: {
        secDom: ["E7 M", "Db7 m", "A7 M", "Gb7 m", "B7 M", "Ab7 m",],
        root: ["A M", "Gb m", "D M", "B m", "E M", "Db m",],
        mInt: ["C M", "F M", "D m", "G M",],
        imagesecDom: ["./images/major7ths/E7 M.png","./images/minor7ths/Db7 m.png","./images/major7ths/A7 M.png","./images/minor7ths/Gb7 m.png", "./images/major7ths/B7 M.png","./images/minor7ths/Ab7 m.png",],
        imageroot: ["./images/majorchords/A M.png", "./images/minorchords/Gb m.png", "./images/majorchords/D M.png", "./images/minorchords/B m.png", "./images/majorchords/E M.png", "./images/minorchords/Db m.png",],
        imagemInt: ["./images/majorchords/C M.png", "./images/majorchords/F M.png", "./images/minorchords/D m.png", "./images/majorchords/G M.png",  ],

    },

    Bb: {
        secDom: ["F7 M", "D7 m", "Bb7 M", "G7 m", "C7 M", "A7 m",],
        root: ["Bb M", "G m", "Eb M", "C m", "F M", "D m",],
        mInt: ["Db M", "Gb M", "Eb m", "Ab M",],
        imagesecDom: ["./images/major7ths/F7 M.png","./images/minor7ths/D7 m.png","./images/major7ths/Bb7 M.png","./images/minor7ths/G7 m.png", "./images/major7ths/C7 M.png", "./images/minor7ths/A7 m.png",],
        imageroot: ["./images/majorchords/Bb M.png", "./images/minorchords/G m.png", "./images/majorchords/Eb M.png", "./images/minorchords/C m.png", "./images/majorchords/F M.png", "./images/minorchords/D m.png",],
        imagemInt: ["./images/majorchords/Db M.png", "./images/majorchords/Gb M.png", "./images/minorchords/Eb m.png", "./images/majorchords/Ab M.png",],

    },

    B: {
        secDom: ["Gb7 M", "Eb7 m", "B7 M", "Ab7 m", "Db7 M", "Bb7 m",],
        root: ["B M", "Ab m", "E M", "Db m", "Gb M", "Eb m",],
        mInt: ["Eb M", "A M", "E m", "A M",],
        imagesecDom: ["./images/major7ths/Gb7 M.png","./images/minor7ths/Eb7 m.png","./images/major7ths/B7 M.png","./images/minor7ths/Ab7 m.png","./images/major7ths/Db7 M.png","./images/minor7ths/Bb7 m.png",],
        imageroot: ["./images/majorchords/B M.png", "./images/minorchords/Ab m.png", "./images/majorchords/E M.png", "./images/minorchords/Db m.png", "./images/majorchords/Gb M.png", "./images/minorchords/Eb m.png",],
        imagemInt: ["./images/majorchords/Eb M.png", "./images/majorchords/A M.png", "./images/minorchords/E m.png", "./images/majorchords/A M.png",],

    }
}

export { chordNotes }

