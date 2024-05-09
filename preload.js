let fountain, grass, h_st, v_st, tri_up, tri_down, tri_left, tri_right, intersection, t_up, t_down, t_left, t_right, lu_turn, ld_turn, ru_turn, rd_turn;
let options;


function preload() {

    fountain = loadImage("./tiles/fountain.png");
    grass = loadImage("./tiles/grass.png");
    h_st = loadImage("./tiles/h-st.png");
    v_st = loadImage("./tiles/v-st.png");
    tri_up = loadImage("./tiles/tri-up.png");
    tri_down = loadImage("./tiles/tri-down.png");
    tri_left = loadImage("./tiles/tri-left.png");
    tri_right = loadImage("./tiles/tri-right.png");
    intersection = loadImage("./tiles/intersection.png");
    t_up = loadImage("./tiles/t-up.png");
    t_down = loadImage("./tiles/t-down.png");
    t_left = loadImage("./tiles/t-left.png");
    t_right = loadImage("./tiles/t-right.png");
    lu_turn = loadImage("./tiles/lu-turn.png");
    ld_turn = loadImage("./tiles/ld-turn.png");
    ru_turn = loadImage("./tiles/ru-turn.png");
    rd_turn = loadImage("./tiles/rd-turn.png");

    options = [
        {
            id: "fountain",
            img: fountain,
            options_id: {
                top: ["grass", "lu-turn", "ru-turn", "h-st", "tri-up", "t-up", "t-left", "t-right"],
                right: ["grass", "ru-turn", "rd-turn", "v-st", "tri-right", "t-right", "t-up", "t-down"],
                bottom: ["grass", "ld-turn", "rd-turn", "h-st", "tri-down", "t-down", "t-left", "t-right"],
                left: ["grass", "lu-turn", "ld-turn", "v-st", "tri-left", "t-left", "t-up", "t-down"]
            }
        },
        {
            id: "grass",
            img: grass,
            options_id: {
                top: ["fountain", "grass", "lu-turn", "ru-turn", "h-st", "tri-up", "t-up", "t-left", "t-right"],
                right: ["fountain", "grass", "ru-turn", "rd-turn", "v-st", "tri-right", "t-right", "t-up", "t-down"],
                bottom: ["fountain", "ld-turn", "rd-turn", "grass", "h-st", "tri-down", "t-down", "t-left", "t-right"],
                left: ["fountain", "lu-turn", "ld-turn", "grass", "v-st", "tri-left", "t-left", "t-up", "t-down"]
            }
        },
        {
            id: "h-st",
            img: h_st,
            options_id: {
                top: ["fountain", "grass", "lu-turn", "ru-turn", "h-st", "tri-up", "t-up", "t-left", "t-right"],
                right: ["intersection", "ld-turn", "lu-turn", "h-st", "t-left", "tri-down", "tri-left", "tri-up"],
                bottom: ["fountain", "grass", "ld-turn", "rd-turn", "h-st", "t-down", "t-left", "tri-down", "t-right"],
                left: ["intersection", "ru-turn", "rd-turn", "h-st", "t-right", "tri-down", "tri-right", "tri-up"]
            }
        },
        {
            id: "v-st",
            img: v_st,
            options_id: {
                top: ["intersection", "ld-turn", "rd-turn", "t-down", "tri-down", "tri-left", "tri-right", "v-st"],
                right: ["fountain", "grass", "rd-turn", "ru-turn", "t-down", "t-right", "tri-right", "t-up", "v-st"],
                bottom: ["intersection", "lu-turn", "ru-turn", "tri-left", "tri-right", "tri-up", "t-up", "v-st"],
                left: ["fountain", "grass", "ld-turn", "lu-turn", "t-down", "t-left", "tri-left", "t-up", "v-st"]
            }
        },
        {
            id: "tri-up",
            img: tri_up,
            options_id: {
                top: ["intersection", "ld-turn", "rd-turn", "t-down", "tri-down", "tri-left", "tri-right", "v-st"],
                right: ["intersection", "lu-turn", "ld-turn", "h-st", "t-left", "tri-down", "tri-left", "tri-up"],
                bottom: ["fountain", "grass", "ld-turn", "rd-turn", "h-st", "t-down", "t-left", "tri-down", "t-right"],
                left: ["intersection", "h-st", "ru-turn", "rd-turn", "t-right", "tri-down", "tri-right", "tri-up"]
            }
        },
        {
            id: "tri-down",
            img: tri_down,
            options_id: {
                top: ["fountain", "grass", "lu-turn", "ru-turn", "h-st", "tri-up", "t-up", "t-left", "t-right"],
                right: ["intersection", "lu-turn", "ld-turn", "h-st", "t-left", "tri-down", "tri-left", "tri-up"],
                bottom: ["intersection", "lu-turn", "ru-turn", "tri-left", "tri-right", "tri-up", "t-up", "v-st"],
                left: ["intersection", "ru-turn", "rd-turn", "h-st", "t-right", "tri-down", "tri-right", "tri-up"]
            }
        },
        {
            id: "tri-left",
            img: tri_left,
            options_id: {
                top: ["intersection", "ld-turn", "rd-turn", "t-down", "tri-down", "tri-left", "tri-right", "v-st"],
                right: ["fountain", "grass", "ru-turn", "rd-turn", "t-down", "t-right", "tri-right", "t-up", "v-st"],
                bottom: ["intersection", "lu-turn", "ru-turn", "tri-left", "tri-right", "tri-up", "t-up", "v-st"],
                left: ["intersection", "rd-turn", "ru-turn", "h-st", "t-right", "tri-down", "tri-right", "tri-up"]
            }
        },
        {
            id: "tri-right",
            img: tri_right,
            options_id: {
                top: ["intersection", "ld-turn", "rd-turn", "t-down", "tri-down", "tri-left", "tri-right", "v-st"],
                right: ["intersection", "ld-turn", "lu-turn", "h-st", "t-left", "tri-down", "tri-left", "tri-up"],
                bottom: ["intersection", "lu-turn", "ru-turn", "tri-left", "tri-right", "tri-up", "t-up", "v-st"],
                left: ["fountain", "grass", "lu-turn", "ld-turn", "t-down", "t-left", "tri-left", "t-up", "v-st"]
            }
        },
        {
            id: "intersection",
            img: intersection,
            options_id: {
                top: ["intersection", "ld-turn", "rd-turn", "t-down", "tri-down", "tri-left", "tri-right", "v-st"],
                right: ["intersection", "ld-turn", "lu-turn", "h-st", "t-left", "tri-down", "tri-left", "tri-up"],
                bottom: ["intersection", "lu-turn", "ru-turn", "tri-left", "tri-right", "tri-up", "t-up", "v-st"],
                left: ["h-st", "rd-turn", "ru-turn", "intersection", "tri-down", "t-right", "tri-right", "tri-up"]
            }
        },
        {
            id: "t-up",
            img: t_up,
            options_id: {
                top: ["intersection", "rd-turn", "ld-turn", "t-down", "tri-down", "tri-left", "tri-right", "v-st"],
                right: ["fountain", "grass", "ru-turn", "rd-turn", "v-st", "tri-right", "t-right", "t-up", "t-down"],
                bottom: ["fountain", "grass", "rd-turn", "ld-turn", "h-st", "tri-down", "t-down", "t-left", "t-right"],
                left: ["fountain", "grass", "lu-turn", "ld-turn", "v-st", "tri-left", "t-left", "t-up", "t-down"]
            }
        },
        {
            id: "t-down",
            img: t_down,
            options_id: {
                top: ["fountain", "grass", "lu-turn", "ru-turn", "h-st", "tri-up", "t-up", "t-left", "t-right"],
                right: ["fountain", "grass", "ru-turn", "rd-turn", "v-st", "tri-right", "t-right", "t-up", "t-down"],
                bottom: ["intersection", "lu-turn", "ru-turn", "tri-left", "tri-right", "tri-up", "t-up", "v-st"],
                left: ["grass", "v-st", "lu-turn", "ld-turn", "tri-left", "t-left", "t-up", "t-down"]
            }
        },
        {
            id: "t-left",
            img: t_left,
            options_id: {
                top: ["fountain", "grass", "lu-turn", "ru-turn", "h-st", "tri-up", "t-up", "t-left", "t-right"],
                right: ["fountain", "grass", "ru-turn", "rd-turn", "v-st", "tri-right", "t-right", "t-up", "t-down"],
                bottom: ["fountain", "grass", "ld-turn", "rd-turn", "h-st", "tri-down", "t-down", "t-left", "t-right"],
                left: ["intersection", "rd-turn", "ru-turn", "h-st", "t-right", "tri-down", "tri-right", "tri-up"]
            }
        },
        {
            id: "t-right",
            img: t_right,
            options_id: {
                top: ["fountain", "grass", "lu-turn", "ru-turn", "h-st", "tri-up", "t-up", "t-left", "t-right"],
                right: ["intersection", "ld-turn", "lu-turn", "h-st", "t-left", "tri-down", "tri-left", "tri-up"],
                bottom: ["fountain", "grass", "ld-turn", "rd-turn", "h-st", "tri-down", "t-down", "t-left", "t-right"],
                left: ["fountain", "grass", "lu-turn", "ld-turn", "v-st", "tri-left", "t-left", "t-up", "t-down"]
            }
        },
        {
            id: "lu-turn",
            img: lu_turn,
            options_id: {
                top: ["intersection", "ld-turn", "rd-turn", "t-down", "tri-down", "tri-left", "tri-right", "v-st"],
                right: ["fountain", "grass", "ru-turn", "rd-turn", "v-st", "tri-right", "t-right", "t-up", "t-down"],
                bottom: ["fountain", "grass", "ld-turn", "rd-turn", "h-st", "tri-down", "t-down", "t-left", "t-right"],
                left: ["intersection", "ru-turn", "rd-turn", "h-st", "t-right", "tri-down", "tri-right", "tri-up"]
            }
        },
        {
            id: "ld-turn",
            img: ld_turn,
            options_id: {
                top: ["fountain", "grass", "lu-turn", "ru-turn", "h-st", "tri-up", "t-up", "t-left", "t-right"],
                right: ["fountain", "grass", "ru-turn", "rd-turn", "v-st", "tri-right", "t-right", "t-up", "t-down"],
                bottom: ["intersection", "ru-turn", "lu-turn", "tri-left", "tri-right", "tri-up", "t-up", "v-st"],
                left: ["intersection", "ru-turn", "rd-turn", "h-st", "t-right", "tri-down", "tri-right", "tri-up"]
            }
        },
        {
            id: "ru-turn",
            img: ru_turn,
            options_id: {
                top: ["intersection", "ld-turn", "rd-turn", "t-down", "tri-down", "tri-left", "tri-right", "v-st"],
                right: ["intersection", "ld-turn", "lu-turn", "h-st", "t-left", "tri-down", "tri-left", "tri-up"],
                bottom: ["fountain", "grass", "ld-turn", "rd-turn", "h-st", "tri-down", "t-down", "t-left", "t-right"],
                left: ["fountain", "grass", "lu-turn", "ld-turn", "v-st", "tri-left", "t-left", "t-up", "t-down"]
            }
        },
        {
            id: "rd-turn",
            img: rd_turn,
            options_id: {
                top: ["fountain", "grass", "lu-turn", "ru-turn", "h-st", "tri-up", "t-up", "t-left", "t-right"],
                right: ["intersection", "lu-turn", "ld-turn", "h-st", "t-left", "tri-down", "tri-left", "tri-up"],
                bottom: ["intersection", "lu-turn", "ru-turn", "tri-left", "tri-right", "tri-up", "t-up", "v-st"],
                left: ["fountain", "grass", "ld-turn", "lu-turn", "v-st", "tri-left", "t-left", "t-up", "t-down"]
            }
        },
    ]

}