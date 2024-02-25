function upd(x, y){
    document.getElementsByClassName(x).innerHTML = y;
}

function E(x){
    return new ExpantaNum(x);
}

function ex(x){
    let nx = new E(0);
    nx.array = x.array;
    nx.layer = x.layer;
    nx.sign = x.sign;
    return nx;
}

var items = ["accel", "nucleus", "atom", "molecule"];

var upgs = {
    accel: {
        base: {
            cost: 10,
            increase: 1
        }
    },

    nucleus: {
        base: {
            cost: E(5e3),
            increase: 1
        }
    },

    atom: {
        base: {
            cost: E(1e7)
        }
    },

    molecule: {
        base: {
            cost: E(1e10)
        }
    }
}

function initUpgs(){
    aclLvlReq = 10000;
    nucLvlReq = 1000;
    atomLvlReq = 100;
    moleLvlReq = 100;

    for(i = 1; i < aclLvlReq; i++){
        upgs.accel.i.cost = (upgs.accel.base.cost)*(1.15^i);
        upgs.accel.i.increase = (upgs.accel.base.increase)*(1.1^i);
    }

    for(i = 1; i < nucLvlReq; i++){
        upgs.nucleus.i.cost = (upgs.nucleus.base.cost)*(1.2^i);
        upgs.nucleus.i.increase = (upgs.nucleus.base.increase)*(3^i)
    }

    for(i = 1; i < atomLvlReq; i++){
        upgs.atom.i.cost = (upgs.atom.base.cost)*(1.35^i);
    }

    for(i = 1; i < moleLvlReq; i++){
        upgs.molecule.i.cost = (upgs.molecule.base.cost)*(2^i)
    }
}

var player = {
    quarks: E(10),

    gain: {
        qpc: 1,
        qps: 0,
        aps: 0,
        npfs: 0
    },

    accel: {
        lvl: E(0),
        unl: true,
        upg: []
    },

    nucleus: {
        lvl: E(0),
        unl: false,
        upg: []
    },

    atom: {
        lvl: E(0),
        unl: false,
        upg: []
    },

    molecule: {
        lvl: E(0),
        unl: false,
        upg: []
    },

    prestige: {
        amt: 0,
        cost: E(1e12),
    }
}

function save(){
    localStorage.setItem("incrQuarksSave", btoa(JSON.stringify(player)));
}

function load(x){
    if(typeof x == "string"){
        let load = JSON.parse(atob(x));

        player.quarks = ex(load.quarks);

        for(i = 0; i < 4; i++){
            if(load[items[i]] != undefined){
                player[items[i]].lvl = load[items[i]].lvl;
                player[items[i]].unl = load[items[i]].unl;
                player[items[i]].upg = load[items[i]].upg;
            }
        }
    }
}

function loadGame(){
    load(localStorage.getItem("incrQuarksSave"));
    initUpgs();
    setInterval(save, 10000);
}
