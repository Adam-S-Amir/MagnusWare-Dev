var dqp = 0;
var ddjp = 0;
var db11 = 0;
var dbIp = 0;
var dbcb = 0;
var dib = 0;
var dpl = 0;
var dbdp = 0;
var dbid = 0;
var dbb1 = 0;
var dbdo = 0;
var ddp = 0;
var dp1 = document;
var _un = "undefined";
var dpcc = 1000;
var _nos = 0;
dplo();
var dbj1 = dib && ddp < 7.2;
var dmDefStyle = "background:transparent;border:none;";
var doI;
var ddqd;
var dddq = 0;
var dbjj = 0;
var dbd = [];
var dbIc = 0;
var dpcq = /dm([0-9]+)m([0-9]+)/;
var dpco = /dm([0-9]+)m([0-9]+)i([0-9]+)/;
var dbqq = {
    dbI: 0
};
var doc = {
    dbbq: 0,
    ddpb: "",
    cX: 0,
    cY: 0,
    dbo: 0,
    dq: null
};
var dbpb = {
    dbq1: 0,
    ddb1: 0
};
var dlq = {
    dbol: 0,
    dI: null,
    doq: null,
    dqj: null,
    dq: null,
    dc: null
};
var dbll = 0;
var ddjI = "";
var ddjd = 0;
var ddbl = 1;
var ddio = 0;
var dci = 1;
var dbcp;

function dplo() {
    var nv = navigator;
    var a = nv.userAgent;
    var n = nv.appName;
    var v = nv.appVersion;
    var ns = "Netscape";
    var gk = "Gecko";
    var pf = function (r) {
        return parseFloat(r);
    };
    window.dbid = v.indexOf("Mac") >= 0;
    window.p_LNX = nv.platform.indexOf("Linux") != -1;
    if (RegExp(" AppleWebKit/").test(navigator.userAgent)) {
        dbdo = 1;
        return;
    }
    if (n.toLowerCase() == "konqueror") {
        dbdp = 1;
        ddp = 1.6;
        return;
    }
    if (a.indexOf("Opera") >= 0) {
        dpl = 1;
        ddp = pf(a.substring(a.indexOf("Opera") + 6, a.length));
        dbb1 = ddp >= 7;
        return;
    }
    if (n.toLowerCase() == "netscape") {
        if (a.indexOf("rv:") != -1 && a.indexOf(gk) != -1 && a.indexOf(ns) == -1) {
            dbdp = 1;
            ddp = pf(a.substring(a.indexOf("rv:") + 3, a.length));
        } else {
            dib = 1;
            if (a.indexOf(gk) != -1 && a.indexOf(ns) > a.indexOf(gk)) {
                var d = a.indexOf(ns + "6") > -1 ? 10 : a.indexOf(ns) > -1 ? 9 : 0;
                ddp = pf(a.substring(a.indexOf(ns) + d, a.length));
            } else {
                ddp = pf(v);
            }
        }
        return;
    }
    if (dp1.all ? 1 : 0) {
        dqp = 1;
        ddp = pf(a.substring(a.indexOf("MSIE ") + 5, a.length));
        ddjp = ddp >= 5;
        db11 = ddp >= 6;
        dbb1 = 1;
        dbIp = !dbid;
        dbcb = dbid;
    }
}
dpc1();

function dpc1() {
    window.dd1b = location.protocol == "https:" ? 1 : 0;
    keystrokes = 0;
    dm_focus = 1;
    dm_actKey = 113;
}

function do1(id) {
    if (dp1.getElementById) {
        return dp1.getElementById(id);
    }
    if (dp1.all) {
        return dp1.all[id];
    }
    if (dp1.layers) {
        return dp1.layers[id];
    }
    return null;
}

function dpq(id) {
    if (!id) {
        return null;
    }
    if (dqp && ddp < 5) {
        return dp1.all[id];
    }
    var dc = dpd(id);
    var dI = dbd[dc.dbp];
    if (dc.dbq != 0 && dI.doi && dci != 3) {
        var dbc = dbil(id, dI.dio);
        if (!dbc) {
            dbc = dbil(id, dI.dbjo);
        }
        return dbc;
    } else {
        return do1(id);
    }
}

function dpd(id) {
    var ex;
    if (!id || id.indexOf("i") > 0) {
        ex = dpco.exec(id);
        if (!ex || !dbd[parseInt(ex[1])] || !dbd[parseInt(ex[1])].m[parseInt(ex[2])]) {
            return null;
        }
        return dbd[parseInt(ex[1])].m[parseInt(ex[2])].i[parseInt(ex[3])];
    } else {
        ex = dpcq.exec(id);
        if (!ex || !dbd[parseInt(ex[1])]) {
            return null;
        }
        return dbd[parseInt(ex[1])].m[parseInt(ex[2])];
    }
}
var dbb = new (function () {
    var dd1 = this;
    dd1.ddbo = function (base, dbc) {
        for (var p in dbc) {
            base[p] = dbc[p];
        }
    };
    dd1.ddbo(dd1, {
        ddlj: function (o) {
            var op = dpl && ddp < 6;
            var w = op ? o.style.pixelWidth : o.offsetWidth;
            var h = op ? o.style.pixelHeight : o.offsetHeight;
            return [w, h];
        },
        dpj: function (o) {
            if (!o) {
                return [0, 0, 0, 0];
            }
            var l = 0,
                t = 0,
                wh = dd1.ddlj(o),
                d = 0,
                a = "absolute",
                r = "relative";
            while (o) {
                l += parseInt(o.offsetLeft);
                t += parseInt(o.offsetTop);
                if (o.parentNode && o.parentNode.tagName) {
                    with (o.parentNode) {
                        if (!/HTML|BODY/.test(tagName)) {
                            l -= scrollLeft;
                            t -= scrollTop;
                        }
                    }
                }
                o = o.offsetParent;
            }
            if (dpl && ddp >= 9) {
                l -= dp1.body.leftMargin || 0;
                t -= dp1.body.topMargin || 0;
            }
            return [l, t, wh[0], wh[1], d];
        },
        getWinParam: function (paramName, def) {
            return paramName in window && typeof window[paramName] != _un ? window[paramName] : def;
        },
        dbdd: function (win) {
            if (!win) {
                win = window;
            }
            var l = 0,
                t = 0,
                w = 0,
                h = 0;
            if (dib || dbdp || dpl || dbdo) {
                l = win.pageXOffset;
                t = win.pageYOffset;
                w = win.innerWidth;
                h = win.innerHeight;
                if (dbdp) {
                    if (win.scrollMaxX > 0) {
                        h -= dd1.ddcd();
                    }
                    if (win.scrollMaxY > 0) {
                        w -= dd1.ddcd();
                    }
                } else if (!dbdo) {
                    if (win.document.width > win.innerWidth) {
                        h -= 16;
                    }
                    if (win.document.height > win.innerHeight) {
                        w -= 16;
                    }
                }
            } else {
                var doc = dd1.ddqb(win.document);
                if (doc) {
                    with (doc) {
                        l = scrollLeft;
                        t = scrollTop;
                        w = clientWidth;
                        h = clientHeight;
                    }
                }
            }
            return [l, t, w, h];
        },
        join$: function () {
            var a = arguments;
            var dji = [];
            for (var i = 0; i < a.length; i++) {
                if (typeof a[i] == "object" && typeof a[i].length != "undefined") {
                    for (var j = 0; j < a[i].length; j++) {
                        dji[dji.length] = a[i][j];
                    }
                } else {
                    dji[dji.length] = a[i];
                }
            }
            return dji;
        },
        dblq: function (db1c, context) {
            db1c = db1c.split(",");
            var dji = [];
            for (var ddpo = 0; ddpo < db1c.length; ddpo++) {
                var dol = db1c[ddpo];
                var dlp = [context];
                while (dol) {
                    var dol = /^([>|\s+]?)(\*|\w+)(\:first|\:last)?(.*)$/.exec(dol);
                    var dbdj = [];
                    var i = 0;
                    while (i < dlp.length) {
                        if (dlp[i].childNodes) {
                            for (var chInd = 0; chInd < dlp[i].childNodes.length; chInd++) {
                                if (dlp[i].childNodes[chInd].tagName) {
                                    if (dol[2] == "*" || dol[2] == dlp[i].childNodes[chInd].tagName) {
                                        dbdj[dbdj.length] = dlp[i].childNodes[chInd];
                                        if (dol[3] == ":first") {
                                            break;
                                        }
                                    }
                                    if (dol[1] != ">") {
                                        dlp[dlp.length] = dlp[i].childNodes[chInd];
                                    }
                                }
                            }
                        }
                        if (dol[3] == ":first" && dbdj.length) {
                            break;
                        }
                        i++;
                    }
                    if (dol[3] == ":last") {
                        dbdj = [dbdj[dbdj.length - 1]];
                    }
                    dlp = dbdj;
                    dol = dol[dol.length - 1];
                }
                dji = dd1.join$(dji, dlp);
            }
            return dji;
        },
        ddcc: [],
        dbdq: function (ddqq) {
            if (dd1.ddcc[ddqq]) {
                return;
            }
            if (typeof dd1.workPath == _un) {
                if (typeof dmWorkPath != _un) {
                    dd1.workPath = dmWorkPath;
                } else {
                    dd1.workPath = "";
                    var scripts = document.getElementsByTagName("script");
                }
            }
            dd1.ddcc[ddqq] = 1;
        },
        dbqb: function (val) {
            if (!/\D+/.test(val) && val) {
                return val + "px";
            }
            return val;
        },
        scrlWidth: 0,
        ddcd: function () {
            if (!dd1.scrlWidth) {
                if (!dbdp) {
                    dd1.scrlWidth = dqp ? 17 : dpl ? 17 : dbdo ? 16 : 17;
                } else {
                    var dblp = document;
                    var scr = dblp.createElement("divy");
                    scr.style.position = "absolute";
                    scr.style.top = "-1000px";
                    scr.style.left = "-1000px";
                    scr.style.width = "100px";
                    scr.style.height = "50px";
                    scr.style.overflow = "hidden";
                    var inn = dblp.createElement("div");
                    inn.style.width = "100%";
                    inn.style.height = "200px";
                    scr.appendChild(inn);
                    dblp.body.appendChild(scr);
                    var wNoScroll = inn.offsetWidth;
                    scr.style.overflow = "auto";
                    var wScroll = inn.offsetWidth;
                    dblp.body.removeChild(dblp.body.lastChild);
                    dd1.scrlWidth = wNoScroll - wScroll;
                }
            }
            return dd1.scrlWidth;
        },
        ddqj: [],
        dIc: function (dbbi) {
            if (!dbbi) {
                return 0;
            }
            if (typeof dbbi != "string") {
                for (var i = 0; i < dbbi.length; i++) {
                    dd1.dIc(dbbi[i]);
                }
                return 0;
            }
            if (dd1.ddqj[dbbi]) {
                return dd1.ddqj[dbbi].dpoo || dbid && dbdo;
            }
            var img = new Image;
            img.onload = function () {
                this.dpoo = 1;
            };
            img.src = dbbi;
            dd1.ddqj[dbbi] = img;
            return 0;
        },
        dbpo: function (dq1, db1) {
            if (db1) {
                if (!db1.dbjp) {
                    db1.dbjp = 1;
                }
                if (!db1.dbjd) {
                    db1.dbjd = 1;
                }
                if (!db1.dbpq) {
                    db1.dbpq = 10;
                }
                dq1 = Math.sin((dq1 * (db1.dbjp + 0.5) - 0.5) * Math.PI) / (db1.dbjd * (Math.pow(db1.dbpq, dq1) + 1 / db1.dbjd - 1));
                if (db1.ddjo) {
                    dq1 = 1 - Math.abs(dq1);
                } else {
                    dq1 += 1;
                }
            }
            return dq1;
        },
        dbo1: function (dbc, dbib, dc1, dbpo) {
            with (dbc.style) {
                var dIo = [left, top, width, height];
            }
            var dqI = dd1.dpj(dbc);
            var b = parseInt(dbc.style.borderWidth);
            if (b) {
                dqI[2] -= 2 * b;
                dqI[3] -= 2 * b;
            }
            var overflow = dbc.style.overflow;
            if (dc1) {
                dc1 = dbc.childNodes[0];
                var margin = [0, dc1.style.marginLeft, dc1.style.marginTop][dbib];
            }
            this.set = function (value) {
                var dq1 = dd1.dbpo(value, dbpo);
                dbc.style.overflow = value == 1 ? overflow : "hidden";
                switch (dbib) {
                    case 0:
                        dbc.style.top = value == 1 ? dIo[1] : dqI[1] + dqI[3] * (1 - dq1) + "px";
                    case 2:
                        dbc.style.height = value == 1 ? dIo[3] : dqI[3] * dq1 + "px";
                        if (dc1 && dbib == 2) {
                            dc1.style.marginTop = value == 1 ? margin : dqI[3] * (dq1 - 1) + "px";
                        }
                        break;
                    case 3:
                        dbc.style.left = value == 1 ? dIo[0] : dqI[0] + dqI[2] * (1 - dq1) + "px";
                    case 1:
                        dbc.style.width = value == 1 ? dIo[2] : dqI[2] * dq1 + "px";
                        if (dc1 && dbib == 1) {
                            dc1.style.marginLeft = value == 1 ? margin : dqI[2] * (dq1 - 1) + "px";
                        }
                        break;
                    default:
                        ;
                }
            };
        },
        ddbi: function (dbc, dbpo) {
            var dIo, dqI;
            if (dbc.filters) {
                dIo = dbc.filters.alpha ? dbc.filters.alpha.opacity : 100;
                dqI = parseFloat(dIo) / 100;
            } else {
                dIo = dbc.style.opacity;
                dqI = parseFloat(dIo);
            }
            if (isNaN(dqI)) {
                dqI = 1;
            }
            this.set = function (value) {
                var dq1 = dd1.dbpo(value, dbpo);
                if (dbc.filters) {
                    if (!dbc.filters.alpha) {
                        dbc.style.filter += "alpha(opacity=0)";
                    }
                    dbc.filters.alpha.opacity = value < 1 ? dqI * dq1 * 100 : dIo;
                } else {
                    dbc.style.opacity = value < 1 ? dqI * dq1 : dIo;
                }
            };
        },
        dplc: function (effects) {
            var dcq = this;
            var ddiq = 0.03;
            var dddp = 0;
            var ddbc = 0;
            dcq.status = 0;
            dcq.duration = 0;
            dcq.apply = function () {
                for (i = 0; i < effects.length; i++) {
                    effects[i].set(0);
                }
            };

            function dddc() {
                if (!dcq.status) {
                    return;
                }
                ddbc += ddiq;
                if (ddbc >= dcq.duration || Math.abs(dcq.status) > 1) {
                    for (i = 0; i < effects.length; i++) {
                        effects[i].set(1);
                    }
                    dcq.status = 0;
                } else {
                    for (i = 0; i < effects.length; i++) {
                        effects[i].set(ddbc / dcq.duration);
                    }
                    if (Math.abs(dcq.status) == 1) {
                        dddp = setTimeout(dddc, ddiq * 1000);
                    } else {
                        dcq.status = 0;
                    }
                }
            }
            dcq.play = function () {
                dcq.status = 1;
                dddc();
            };
            dcq.stop = function () {
                if (dcq.status) {
                    dcq.status *= 2;
                    if (dddp) {
                        clearTimeout(dddp);
                    }
                    dddc();
                }
            };
        },
        dbpl: function (dbc, event, func) {
            if (!dbc) {
                return;
            }
            event = event.toLowerCase();
            if (dbc.attachEvent) {
                dbc.attachEvent(event, func);
            } else {
                var o = event in dbc ? dbc[event] : null;
                dbc[event] = typeof o == "function" ? function (v) {
                    try {
                        o(v);
                    } catch (e) { }
                    func(v);
                } : func;
            }
        },
        ddqb: function (docObj) {
            return docObj.compatMode == "CSS1Compat" && !dbdp ? docObj.documentElement : docObj.body;
        },
        dij: function (dboj, ddpp) {
            function dpdq(url) {
                return !/^(javascript:|mailto:|http:\/\/|https:\/\/|ftp:\/\/|search:|file:)/.test(url);
            }

            function dd1I(dbcl) {
                if (/^\w+\:\/[^\/]/.test(dbcl)) {
                    dbcl = "file:///" + dbcl;
                }
                return dbcl ? (dpdq(dbcl) ? ddpp : "") + dbcl : "";
            }
            if (typeof dboj == "string") {
                return dd1I(dboj);
            } else {
                var p = [];
                for (var i = 0; i < dboj.length; i++) {
                    p[i] = dboj[i] ? dd1I(dboj[i]) : "";
                }
                return p;
            }
        }
    });
});

function dp1q() {
    "Cookie checker";
}

function dpo1() {
    doI = dbb.ddqb(dp1);
    if (dddq) {
        window.setInterval("dp1q()", 80);
    }
    if (dbjj) {
        dpdl();
    }
    dbIc = 1;
    if (keystrokes && !(dpl && ddp < 7)) {
        dp1.onkeydown = function (event) {
            return dm_ext_keystrokes(event);
        };
    }
    for (var i = 0; i < dbd.length; i++) {
        with (dbd[i]) {
            if (dbIo >= 0 && diq >= 0) {
                dbpb.dbq1 = 1;
                dm_ext_setPressedItem(dbI, dbpp, diq, 0);
            }
        }
    }
}

function dm_initFrame(dpqd, dppc, dpqj, dpcp) {
    if (dpl && ddp < 7 || dqp && ddp < 5) {
        dbll = 0;
    } else {
        dbll = 1;
        ddjI = dpqd;
        ddjd = dppc;
        ddbl = dpqj;
        ddio = dpcp;
    }
    dci = 1;
    dm_init();
}

function dII(ddpd, dpqq) {
    return typeof ddpd != _un && ddpd ? ddpd : dpqq;
}

function dbqp(dbqi, sp, dpcb, isIndividual) {
    if (!isIndividual || !sp || !(dbqi in sp)) {
        return dpcb;
    }
    var val = sp[dbqi];
    if (val.indexOf(",") >= 0) {
        var reg = "('[^']+')|([^,']+)";
        var res = [];
        while (val) {
            var pos = val.search(reg);
            if (pos < 0) {
                break;
            }
            var tmp = val.match(reg)[0];
            val = val.substring(pos + tmp.length, val.length);
            if (tmp.substring(0, 1) == "'" && tmp.substring(tmp.length - 1, tmp.length) == "'") {
                tmp = tmp.substring(1, tmp.length - 1);
            }
            res[res.length] = tmp;
        }
        val = res;
    }
    return val;
}

function ddIi(dI, style, is) {
    function ddl(name, type) {
        return dbqp(name, style, dI[name], is);
    }
    var pPrefix = dI.dbdI;
    var hAlign = ddl("subMenuAlign");
    var vAlign = ddl("subMenuVAlign");
    var st = {
        dIi: ddl("menuBackColor"),
        dpd1: ddl("menuBackRepeat"),
        dob: dbb.dij(ddl("menuBackImage"), pPrefix),
        dbli: parseInt(ddl("smColumns")),
        db1j: dbb.dbqb(ddl("menuBorderWidth")),
        dbl1: ddl("menuBorderStyle"),
        dbl13: ddl("menuBorderRadius"),
        dbld: ddl("menuBorderColor"),
        ddoi: ddl("itemSpacing"),
        dbc1: ddl("itemPadding"),
        cssClass: dbqp("CSS", style, dI.cssSubmenu, is),
        smW: ddl("smWidth"),
        dbql: ddl("smHeight"),
        onClickSnd: ddl("onClickSnd"),
        onOverSnd: ddl("onOverSnd"),
        djb: ddl("djb"),
        horiz: dbqp("smOrientation", style, -1, is),
        hParent: hAlign.substring(0, 1) == "p",
        vParent: vAlign.substring(0, 1) == "p",
        hAlign: hAlign.indexOf("right") != -1 ? -1 : hAlign.indexOf("center") != -1 ? 0 : 1,
        vAlign: vAlign.indexOf("bottom") != -1 ? -1 : vAlign.indexOf("center") != -1 ? 0 : 1
    };
    if (typeof st.dbc1 != "string") {
        st.dbc1 += "px";
    }
    return st;
}

function ddpi(dI, style, is) {
    function ddl(name, type) {
        var value = dbqp(name, style, dI[name], is);
        if (/array/.test(type)) {
            value = typeof value == "string" ? [value, value] : typeof value == "object" && value.length ? value : ["", ""];
        }
        if (/path/.test(type)) {
            value = dbb.dij(value, dI.dbdI);
        }
        return value;
    }
    var st = {
        dppj: ddl("itemWidth"),
        itHeight: ddl("itemHeight"),
        dIi: ddl("itemBackColor", "array"),
        db1j: dbb.dbqb(ddl("itemBorderWidth")),
        dbl1: ddl("itemBorderStyle", "array"),
        dbl13: ddl("itemBorderRadius", "array"),
        dbld: ddl("itemBorderColor", "array"),
        ddcb: ddl("fontColor", "array"),
        dddI: ddl("fontStyle", "array"),
        ddpj: ddl("fontDecoration", "array"),
        addStyle: ddl("itemAddStyle"),
        dddd: ddl("arrowImageMain", "arraypath"),
        dddb: ddl("arrowImageSub", "arraypath"),
        dob: ddl("itemBackImage", "arraypath"),
        dbdb: ddl("beforeItemImage", "arraypath"),
        dbbd: ddl("afterItemImage", "arraypath"),
        backImgBW: ddl("beforeItemImageW"),
        backImgAW: ddl("afterItemImageW"),
        backImgBH: ddl("beforeItemImageH"),
        backImgAH: ddl("afterItemImageH"),
        dlb: parseInt(ddl("itemSlideBack")),
        cssClass: dbqp("CSS", style, dI.cssItem, is),
        cssClassText: dbqp("CSSText", style, dI.cssItemText, is),
        ddjb: parseInt(ddl("showByClick"))
    };
    if (st.dlb) {
        st.db1j = 0;
    }
    return st;
}

function dpdd(ddbq, db1) {
    var dd1 = dbb;
    var ddjj = this;
    var dIb = db1.popupMode;
    dd1.ddbo(this, db1);
    dd1.ddbo(this, {
        m: [],
        dbI: ddbq,
        id: "dm" + ddbq,
        dp1c: null,
        dpqI: dIb || db1.absolutePos,
        flt: db1.floatable,
        fltX: db1.floatableX,
        fltY: db1.floatableY,
        fltIter: db1.floatIterations,
        fltDX: db1.floatableDX,
        fltDY: db1.floatableDY,
        dbIo: db1.pressedItem,
        dbpp: 0,
        diq: db1.pressedItem >= 0 ? db1.pressedItem : -1,
        doi: dbll,
        dbjo: ddjd,
        dio: ddbl,
        dbpi: ddio,
        ddji: ddjI,
        dIb: dIb,
        saveNavigation: db1.saveNavigationPath,
        smSmartScroll: dbcb ? 0 : db1.smSmartScroll,
        dbli: db1.smColumns,
        _useIFRAME: db1.useIFRAME || !dd1b && dbIp && db11 || p_LNX && dbdp && ddp != 1.6,
        _AJAX: db1.dmAJAX,
        _ajaxReload: db1.ajaxReload,
        dbqI: dIb ? 0 : 1,
        dcl: 0,
        itemWidth: "100%",
        itemHeight: "100%",
        itemAddStyle: "",
        ddI1: db1.fontColorDisabled,
        dpbo: db1.smHideOnClick,
        dpbI: db1.separatorImage,
        dbji: db1.separatorAlignment,
        dp1d: db1.separatorColor,
        dpbd: db1.separatorWidth,
        dpbl: db1.separatorHeight,
        dpbc: db1.separatorVImage,
        dplj: db1.separatorVColor,
        dpbp: db1.separatorVWidth,
        dpbq: db1.separatorVHeight,
        ddop: db1.separatorPadding,
        dbdI: db1.pathPrefix_img,
        dp1b: dbb.dij(db1.smFrameImage, db1.pathPrefix_img),
        dbdi: db1.smFrameImage ? db1.smFrameWidth : 0,
        dbop: function () {
            return ddjj.doi && dci == 1 ? parent.frames[ddjj.dio].window : window;
        }
    });
    this.cStyles = [];
    for (var st = 0; st < 2; st++) {
        var dbic = this[st ? "itemStyles" : "menuStyles"];
        var sNames = this[st ? "itemStylesNames" : "menuStylesNames"];
        for (var djj = 0; djj < dbic.length; djj++) {
            if (dbic[djj]) {
                var styles = [];
                for (var i = 0; i < dbic[djj].length; i++) {
                    val = /(\S+)\s*=(.*)/.exec(dbic[djj][i]);
                    if (val) {
                        styles[val[1]] = val[2];
                    }
                }
                var cStyle = this.cStyles[(st ? "i" : "m") + djj] = st ? ddpi(this, styles, 1) : ddIi(this, styles, 1);
                if (!this.cStyles[sNames[djj]] && /^(Menu|All Items|Subitem|Top Item|Top First Item|Top Last Item|TopRootItem|Top Menu|Submenu|Subsubmenu|SubFirstItem|SubLastItem)$/.test(sNames[djj])) {
                    this.cStyles[sNames[djj]] = cStyle;
                }
            }
        }
    }
    if (!this.cStyles.Menu) {
        this.cStyles.Menu = ddIi(this, 0, 0);
    }
    if (!this.cStyles['All Items']) {
        this.cStyles['All Items'] = ddpi(this, 0, 0);
    }
    if (this.djb < 0 && dIb) {
        this.djb = 1000;
    }
    if (dIb) {
        dbb.dbdq("dmenu_popup", 0);
    }
    dbd[ddbq] = this;
}

function ddip(dbl, dbbb, dpq1) {
    var di1 = dbbb ? dbl.m[dbbb.dbq].dpb + 1 : 0;
    var dpo = dbl.m.length;
    if (dbbb && dbbb.ddI && dbbb.ddI != "_") {
        dpo = dpd(dbbb.ddI).dbI;
    }
    if (dbl.m[dpo] && dbl.m[dpo].doo) {
        dbl.m[dpo].doo.parentNode.removeChild(dbl.m[dpo].doo);
    }
    var ddd = dbl.cStyles["m" + dpq1] || !di1 && dbl.cStyles['Top Menu'] || di1 > 1 && dbl.cStyles.Subsubmenu || di1 && dbl.cStyles.Submenu || dbl.cStyles.Menu;
    dbl.m[dpo] = {
        i: [],
        dbp: dbl.dbI,
        dbI: dpo,
        id: "dm" + dbl.dbI + "m" + dpo,
        dqb: dbbb,
        ddj: "",
        diI: null,
        hideTimer: null,
        dpb: di1,
        left: dpo ? "-1000px" : dbl.posX,
        top: dpo ? "0px" : dbl.posY,
        ddlc: dpo ? dbl.smMovable : dbl.movable,
        dbIq: 0,
        ddIb: di1 > 1 ? dbl.DX : dbl.topDX,
        ddIo: di1 > 1 ? dbl.DY : dbl.topDY,
        ddd: ddd,
        dbj: ddd.horiz >= 0 ? ddd.horiz == "1" ? 1 : 0 : dpo ? dbl.smOrientation : dbl.isHorizontal,
        rowCount: 1,
        dbId: dpo ? "auto" : dbl.menuWidth,
        mainHeight: dpo ? "auto" : dbl.menuHeight,
        opacity: !dpo ? 100 : dbl.transparency,
        dbbo: !dpo ? -1 : dbl.transition,
        duration: dbl.transDuration,
        ddIl: dbl.transDuration2,
        shadowColor: dbl.shadowColor,
        shadowLen: dbl.shadowLen && dbd.dpld && (dpo || dbl.shadowTop) ? dbl.shadowLen : 0,
        dbcI: "",
        SmartScroll: dpo ? dbl.smSmartScroll : dbl.topSmartScroll,
        sX: 0,
        sY: 0,
        dbip: !dpo && dbl.topSmartScroll ? 1 : 0,
        hAlignReal: 0,
        vAlignReal: 0,
        dboi: [],
        dddl: 0,
        db1b: function () {
            for (var j = 0; j < this.i.length; j++) {
                this.i[j].db1b();
            }
        },
        dbpI: null,
        dbjI: function () {
            if (!this.dbpI || this.dbI != 0 && dbd[this.dbp].doi) {
                this.dbpI = dpq(this.id + "tbl");
            }
            return this.dbpI;
        },
        doo: null,
        dbbp: function () {
            if (dbd[this.dbp].doi) {
                return dpod(dbd[this.dbp], this, this.id);
            } else {
                return dbIj(this);
            }
        },
        ddil: function () {
            if (!this.doo) {
                this.doo = do1(this.id);
            }
            if (this.shadowLen) {
                if (dqp) {
                    this.doo.style.padding = "0 " + dbb.dbqb(this.shadowLen) + " " + dbb.dbqb(this.shadowLen) + " 0";
                } else {
                    this.shadowLen = 0;
                }
            }
        },
        StartHide: function (time) {
            with (this) {
                if (dddl) {
                    return;
                }
                if (dpb == 0) {
                    return;
                }
                if (typeof time == _un) {
                    time = ddd.djb;
                }
                if (!hideTimer && time >= 0) {
                    hideTimer = setTimeout("dlc('" + id + "');window.status=''", time);
                }
            }
        },
        StopHide: function () {
            if (this.hideTimer) {
                this.hideTimer = clearTimeout(this.hideTimer);
            }
        }
    };
    if (dbbb) {
        dbbb.ddI = dbl.m[dpo].id;
    }
    return dbl.m[dpo];
}

function ddqp(dq) {
    while (dq) {
        dq.StopHide();
        if (dq.dqb) {
            dq = dbd[dq.dbp].m[dq.dqb.dbq];
        } else {
            break;
        }
    }
}

function dd1j(str, dppI, dpp1, dppi) {
    return !str || str == "link" ? dpp1 : str == "text" ? dppI : str == "tip" ? dppi : str;
}

function dd1p(dpqb, ddpp) {
    return dbb.dij(dII(dpqb, ""), ddpp);
}

function dddo(dbl, dqd, ddb, dqo, iVar) {
    var dbci = dqo[0] || "";
    var dboI = dqo[1];
    var ddl1 = dqo[5] || dbl.itemTarget;
    var dppo = dqd.dpb == 0 ? dbl.itemAlignTop : dbl.itemAlign;
    var ddoI = dII(dqo[4], "");
    var ddq1 = dII(dqo[8], "");
    var iIcons = [dII(dqo[2], ""), dII(dqo[3], "")];
    if (ddq1 && !dbl._AJAX) {
        dbb.dbdq("dmenu_ajax");
        dbl._AJAX = 1;
    }
    if (!dqd.djp) {
        dboI = dd1p(dboI, dbl.pathPrefix_link);
        iIcons = dbb.dij(iIcons, dbl.dbdI);
    }
    var ddcI = 0;
    if (dbci.charAt(0) == "dcq") {
        ddcI = 1;
        dqd.rowCount++;
        dbci = dbci.substr(1, dbci.length - 1);
    }
    dqd.i[ddb] = {
        dbp: dbl.dbI,
        dbq: dqd.dbI,
        dbI: ddb,
        id: "dm" + dbl.dbI + "m" + dqd.dbI + "i" + ddb,
        dbco: ddq1,
        ddI: ddq1 ? "_" : "",
        ddbj: 0,
        text: dbci,
        link: dboI,
        target: ddl1,
        tip: ddoI,
        dpqo: dd1j(dbl.statusString, dbci, dboI, ddoI),
        align: dppo,
        cursor: dboI ? dbl.itemCursor : "default",
        dbi: dbl.cStyles["i" + dqo[6]] || !dqd.dpb && !ddb && dbl.cStyles['Top First Item'] || !dqd.dpb && ddb >= dqd.i.length - 1 && dbl.cStyles['Top Last Item'] || !dqd.dpb && iVar.childMenu && dbl.cStyles.TopRootItem || !dqd.dpb && dbl.cStyles['Top Item'] || dqd.dpb && ddb >= dqd.i.length - 1 && dbl.cStyles.SubLastItem || dqd.dpb && !ddb && dbl.cStyles.SubFirstItem || dqd.dpb && dbl.cStyles.Subitem || dbl.cStyles['All Items'],
        dpc: iIcons,
        dpb1: dqd.dpb ? dbl.iconWidth : dbl.iconTopWidth,
        dpqp: dqd.dpb ? dbl.iconHeight : dbl.iconTopHeight,
        icState: 0,
        ddIp: !dqd.dbI || !dbl.arrowWidthSub ? dbl.arrowWidth : dbl.arrowWidthSub,
        ddId: !dqd.dbI || !dbl.arrowHeightSub ? dbl.arrowHeight : dbl.arrowHeightSub,
        dcl: ddl1 == "_" ? 1 : 0,
        dco: 0,
        djI: 0,
        dbqI: 1,
        dbIl: 0,
        dppd: ddcI,
        tblObj: null,
        dbjc: null,
        dp1o: null,
        arrObj: null,
        dbi1: 0,
        db1b: function () {
            with (dbb) {
                dIc(this.dbi.dob);
                dIc(this.dbi.dbbd);
                dIc(this.dbi.dbdb);
                dIc(this.dpc);
            }
        },
        dbbp: function () {
            var res = dpq(this.id + "it");
            if (res) {
                return res;
            }
            dbd[this.dbp].m[this.dbq].dbbp();
            return dpq(this.id + "it");
        }
    };
    with (dqd.i[ddb]) {
        dqd.i[ddb].dIj = link.indexOf("search:") == 0 ? 4 : !text ? 0 : text == "-" ? 1 : dbi.dbdb.length > 0 && dbi.dbdb[0] || dbi.dbbd.length > 0 && dbi.dbbd[0] ? 2 : 3;
    }
    return dqd.i[ddb];
}

function dplp(dq) {
    var dppp = ["Blinds", "Checkerboard", "GradientWipe", "Inset", "Iris", "Pixelate", "RadialWipe", "RandomBars", "RandomDissolve", "Slide", "Spiral", "Stretch", "Strips", "Wheel", "Zigzag"];
    var sf = "";
    with (dq) {
        if (ddjp && dbIp) {
            if (dbbo >= 0 && dbbo < 40) {
                var dur = duration / 1000;
                if (dbbo == 24) {
                    sf += "blendTrans(Duration=" + dur + ") ";
                } else if (dbbo < 24) {
                    sf += "revealTrans(Transition=" + dbbo + ",Duration=" + dur + ") ";
                } else if (!(ddp < 5.5)) {
                    sf += "progid:DXImageTransform.Microsoft." + dppp[dbbo - 25] + "(" + dbd[dq.dbp].transOptions + ",duration=" + dur + ") ";
                }
            }
            if (opacity != 100) {
                sf += "alpha(opacity=" + opacity + ") ";
            }
            if (shadowLen) {
                sf += "shadow(color=" + shadowColor + ",direction=135,strength=" + shadowLen + ")";
            }
            if (sf) {
                sf = "filter:" + sf + ";";
            }
        }
        if (opacity != 100) {
            sf += "-moz-opacity:" + opacity / 100 + ";-khtml-opacity:" + opacity / 100 + ";opacity:" + opacity / 100 + ";";
        }
    }
    return sf;
}

function dboc(id, dblo, events) {
    return "<DIV id=\"" + id + "\" " + events + " style=\"" + dblo + "\">";
}

function dbqc() {
    return "</DIV>";
}

function ddll(id, clN, ddpl, ddpc, events) {
    return "<Table id=\"" + id + "\" " + events + " class=\"" + clN + "\" border=0 cellspacing=" + ddpl + " cellpadding=" + ddpc + (dbj1 ? " style=\"position:relative;top:0;left:0;\"" : "") + " >";
}

function ddqi(id, ddpl, ddpc, dblo, events, add) {
    return "<Table id=\"" + id + "\" " + events + " cellspacing=" + ddpl + " cellpadding=" + ddpc + " " + add + " style=\"" + dblo + (dbj1 ? ";position:relative;top:0;left:0;" : "") + "\" border=0>";
}

function ddd1() {
    return "</Table>";
}

function dbd1(id) {
    return "<tr" + (id ? " id=\"" + id + "\"" : "") + ">";
}

function dbdl() {
    return "</tr>";
}

function dcd(id, dblo, add) {
    return "<td id=\"" + id + "\" " + add + " style=\"" + dblo + "\">";
}

function dcb() {
    return "</td>";
}

function dbbc(id, url, w, h, add) {
    if (url == "") {
        return "";
    }
    // image src
    return "<img id=\"" + id + "\" src=\"" + url + "\" " + (w ? "width=" + w : "") + (h ? " height=" + h : "") + " " + add + " border=0>";
}

function dm_mouseSmOut(doj) {
    var dq = dpd(doj);
    if (dq.ddd.djb < 0) {
        return;
    }
    while (dq && dq.ddj) {
        dq = dpd(dq.ddj);
    }
    var maxTime = dq.ddd.djb;
    while (dq && dq.dpb > 0 && dq.ddd.djb >= 0) {
        maxTime = Math.max(maxTime, dq.ddd.djb);
        dq.StartHide(maxTime);
        dq = dbd[dq.dbp].m[dq.dqb.dbq];
    }
}

function dm_mouseSmOver(doj) {
    ddqp(dpd(doj));
}

function ddlo(dI, img, color, w, h, align) {
    if (img) {
        return dbbc("", dbb.dij(img, dI.dbdI), w, h, "");
    } else {
        return "<div style=\"" + (color ? "background-color:" + color + ";" : "") + "width:" + w + ";height:" + h + ";" + (align == "center" ? "margin:0 auto" : align == "left" ? "float:left" : "float:right") + "\">&nbsp;</div>";
    }
}

function ddqI(dc, dbqj) {
    var s = "",
        dq = dbd[dc.dbp].m[dc.dbq];
    if (!dbqj) {
        dbqj = "";
    }
    with (dc) {
        var db1i = dbq ? dbi.dddb[0] : dbi.dddd[0];
        if (db1i) {
            s = dcd(dc.id + "tdA", dmDefStyle + "padding:" + dq.ddd.dbc1 + ";" + dbqj, "") + dbbc(id + "ddiI", db1i, ddIp, ddId, "style=\"display:block;\"") + dcb();
        }
    }
    return s;
}

function ddco(TDid, TDstyleText, TDadd, IMGid, url, w, h, IMGadd) {
    if (h == 0) {
        h = "";
    }
    if (w == 0) {
        w = "";
    }
    s = dcd(TDid, TDstyleText, TDadd) + dbbc(IMGid, url, w, h, IMGadd) + dcb();
    return s;
}

function dp1l(e, doj) {
    var dq = dpd(doj);
    if (!dq.dbip) {
        return;
    }
    var doo = dq.dbjI();
    if (!doo) {
        return;
    }
    doo = doo.parentNode;
    var ex, ey;
    if (typeof e.pageX == _un) {
        var cs = dbb.dbdd(dbd[dq.dbp].dbop());
        ex = e.clientX + cs[0];
        ey = e.clientY + cs[1];
    } else {
        ex = e.pageX;
        ey = e.pageY;
    }
    var dld = dbb.dpj(doo);
    var dx = dld[2] * 0.1;
    var dy = dld[3] * 0.1;
    var px = (ex - dld[0] - dx) / (dld[2] - dx * 2);
    var py = (ey - dld[1] - dy) / (dld[3] - dy * 2);
    db1d(dq, px, py);
}

function db1d(dq, px, py) {
    if (px > 1) {
        px = 1;
    }
    if (px < 0) {
        px = 0;
    }
    if (py > 1) {
        py = 1;
    }
    if (py < 0) {
        py = 0;
    }
    if (!dq) {
        return;
    }
    var tblObj = dq.dbjI();
    if (!tblObj) {
        return;
    }
    var dld = dbb.dpj(tblObj.parentNode);
    if (dbj1) {
        tblWH = dbb.dpj(tblObj);
        tblObj.style.left = px * (dld[2] - tblWH[2]) + "px";
        tblObj.style.top = py * (dld[3] - tblWH[3]) + "px";
    } else {
        tblObj.parentNode.scrollLeft = px * (tblObj.parentNode.scrollWidth - dld[2]);
        tblObj.parentNode.scrollTop = py * (tblObj.parentNode.scrollHeight - dld[3]);
    }
}

function dpdc(dI, dq) {
    return dbbc("", dbb.dij(dI.closeBtn, dI.dbdI), dI.closeBtnW, dI.closeBtnH, "title=\"Close the sumbenu\" onClick=\"dpIb('" + dq.id + "')\" style=\"cursor:" + (dqp && ddp < 6 ? "hand" : "pointer") + ";\"");
}

function ddld(dI, dq) {
    if (dI.doi) {
        return "";
    }
    return "<td id=\"" + dq.id + "m\" NOWRAP align=right valign=\"top\" style=\"width:" + (dq.dbj ? dbb.dbqb(dI.moveWidth) : "100%") + ";height:" + dbb.dbqb(dI.moveHeight) + ";cursor:" + dI.moveCursor + ";padding:0px;\"" + (dq.ddd.dbli > 1 && !dq.dbj ? " colspan=" + dq.ddd.dbli : "") + (dq.rowCount > 1 && dq.dbj ? " rowspan=" + dq.rowCount : "") + " bgcolor=" + dI.moveColor + " background=\"" + dbb.dij(dI.moveImage, dI.dbdI) + "\" " + "onMouseDown=\"dp11(event,'" + dq.id +
        "')\" onMouseUp=\"dp1I()\" >" + (!dq.dbI ? dbbc("", dbb.dij(dI.blankImage, dI.dbdI), dq.dbj ? dI.moveWidth : 1, dq.dbj ? 1 : dI.moveHeight, "style=\"display:block\"") : dpdc(dI, dq)) + "</td>";
}

function dpIb(doj) {
    with (dpd(doj)) {
        dbIq = 0;
        doc.ddpb = "";
        doc.dq = null;
    }
    dlc(doj);
}
var dm_sound = {
    bgHtml: "",
    bgObj: null,
    sndPlaying: "",
    init: function (dq) {
        var s = "";
        if (!dqp) {
            return " ";
        }
        if (!this.bgHtml) {
            this.bgHtml = "<BGSOUND id=\"dm_snd\" style=\"visibility:hidden;\">";
            s = this.bgHtml;
        }
        s += "<DIV STYLE=\"position:absolute;\">";
        if (dq.ddd.onOverSnd) {
            s += "<EMBED SRC=\"" + dq.ddd.onOverSnd + "\" AUTOSTART=\"FALSE\" HIDDEN=\"TRUE\">";
        }
        if (dq.ddd.onClickSnd) {
            s += "<EMBED SRC=\"" + dq.ddd.onClickSnd + "\" AUTOSTART=\"FALSE\" HIDDEN=\"TRUE\"\">";
        }
        s += "</DIV>";
        return s;
    },
    playOver: function (dq) {
        this.startPlay(dq.ddd.onOverSnd);
    },
    playClick: function (dq) {
        this.startPlay(dq.ddd.onClickSnd);
    },
    startPlay: function (snd) {
        if (!this.bgHtml || !snd || this.sndPlaying) {
            return;
        }
        if (!this.bgObj) {
            this.bgObj = do1("dm_snd");
        }
        this.sndPlaying = snd;
        this.bgObj.src = snd;
        setTimeout("dm_sound.sndPlaying = '';", 80);
    }
};
var dpqi = "";
var dm_EventPause = {
    val: "",
    timeout: null,
    set: function (aVal) {
        this.timeout = clearTimeout(this.timeout);
        this.val = aVal;
    },
    clear: function (aVal) {
        if (this.val == aVal) {
            this.timeout = setTimeout("dm_EventPause.val = '';", 10);
        }
    }
};

function dm_applyItemTree(mVar, dc, dI) {
    var dq = ddip(dI, dc);
    for (var i = 0; i < mVar.i.length; i++) {
        var dpdi = dddo(dI, dq, i,
            [mVar.i[i].text,
            mVar.i[i].link,
            mVar.i[i].dpc[0],
            mVar.i[i].dpc[1],
            mVar.i[i].tip,
            mVar.i[i].target,
            mVar.i[i].style,
            typeof mVar.i[i].childMenu == "string" ? mVar.i[i].childMenu : ""], mVar.i[i]);
        if (mVar.i[i].childMenu && typeof mVar.i[i].childMenu != "string") {
            dm_applyItemTree(mVar.i[i].childMenu, dpdi, dI);
        }
    }
}

function dm_init() {
    var db1 = {
        isHorizontal: 1,
        smColumns: 1,
        smOrientation: 0,
        dmRTL: 0,
        pressedItem: -2,
        menuWidth: "",
        menuHeight: "",
        smWidth: "",
        smHeight: "",
        absolutePos: 0,
        posX: 0,
        posY: 0,
        topDX: 0,
        topDY: 0,
        DX: 0,
        DY: 0,
        subMenuAlign: "",
        subMenuVAlign: "",
        fontStyle: 0,
        fontColor: 0,
        fontDecoration: 0,
        fontColorDisabled: "#AAAAAA",
        menuBackColor: "#FFF",
        menuBackImage: "",
        menuBackRepeat: "repeat",
        menuBorderColor: "",
        menuBorderWidth: 0,
        menuBorderStyle: "",
        menuBorderRadius: "",
        smFrameImage: "",
        smFrameWidth: 0,
        itemBackColor: "",
        itemBackImage: "",
        itemSlideBack: 0,
        itemBorderWidth: 0,
        itemBorderColor: "",
        itemBorderStyle: "",
        itemSpacing: 0,
        itemPadding: 0,
        itemAlignTop: "left",
        itemAlign: "left",
        iconTopWidth: 0,
        iconTopHeight: 0,
        iconWidth: 0,
        iconHeight: 0,
        arrowWidth: 0,
        arrowHeight: 0,
        arrowWidthSub: 0,
        arrowHeightSub: 0,
        arrowImageMain: "",
        arrowImageSub: "",
        separatorImage: "",
        separatorColor: "",
        separatorWidth: "100%",
        separatorHeight: "3px",
        separatorAlignment: "left",
        separatorVImage: "",
        separatorVColor: "",
        separatorVWidth: "3px",
        separatorVHeight: "100%",
        separatorPadding: 0,
        floatable: 0,
        floatIterations: 6,
        floatableX: 1,
        floatableY: 1,
        floatableDX: 15,
        floatableDY: 15,
        movable: 0,
        moveWidth: 12,
        moveHeight: 20,
        moveColor: "#AA0000",
        moveImage: "",
        moveCursor: "default",
        smMovable: 0,
        closeBtnW: 0,
        closeBtnH: 0,
        closeBtn: "",
        blankImage: "",
        transparency: 100,
        transition: -1,
        transOptions: "",
        transDuration: 300,
        transDuration2: 200,
        shadowLen: 0,
        shadowColor: "#777",
        shadowTop: 0,
        cssSubmenu: "",
        cssItem: ["", ""],
        cssItemText: ["", ""],
        dmObjectsCheck: 0,
        saveNavigationPath: 1,
        showByClick: 0,
        noWrap: 1,
        smShowPause: 200,
        djb: 999,
        smSmartScroll: 1,
        topSmartScroll: 0,
        smHideOnClick: 1,
        dm_writeAll: 0,
        useIFRAME: 0,
        dmSearch: 0,
        pathPrefix_img: "",
        pathPrefix_link: "",
        itemCursor: "default",
        itemTarget: "_top",
        statusString: "link",
        beforeItemImage: "",
        afterItemImage: "",
        beforeItemImageW: 0,
        afterItemImageW: 0,
        beforeItemImageH: 0,
        afterItemImageH: 0,
        dmAJAX: 0,
        ajaxReload: 0,
        dynamic: 0,
        popupMode: 0,
        onClickSnd: "",
        onOverSnd: "",
        itemStylesNames: [],
        menuStylesNames: [],
        itemStyles: [],
        menuStyles: []
    };
    for (var dbqi in db1) {
        db1[dbqi] = dbb.getWinParam(dbqi, db1[dbqi]);
    }
    if (dpl) {
        db1.dm_writeAll = ddp >= 7 ? 0 : 1;
    }
    if (db1.floatable && !(dpl && ddp < 6)) {
        dddq = 1;
    }
    dbjj |= db1.movable || db1.smMovable;
    dbd.dpld = typeof dp1.body.style.filter == "string" && navigator.userAgent.toLowerCase().indexOf("opera") < 0;
    if (dbll) {
        dbb.dbdq("dmenu_cf", 0);
    }
    if (db1.dmObjectsCheck || dddq || dbjj) {
        dbb.dbdq("", 0);
        db1.dmObjectsCheck = 1;
    }
    if (keystrokes) {
        dbb.dbdq("", 0);
    }
    if (db1.dynamic) {
        dbb.dbdq("dmenu_dyn", 0);
    }
    if (db1.dmAJAX) {
        dbb.dbdq("dmenu_ajax");
    }
    if (db1.dmSearch) {
        dbb.dbdq("dmenu_search", 0);
    }
    var djo = dbll ? parent.frames[ddbl] : window;
    if (typeof djo.dm_crossMenuInd == _un) {
        djo.dm_crossMenuInd = dbqq.dbI;
    } else {
        dbqq.dbI = djo.dm_crossMenuInd + 1;
        djo.dm_crossMenuInd++;
    }
    if (!dbqq.dbI) {
        dbb.dbpl(window, "onload", dpo1);
    }
    var djp = window.menuIdentifier || window.LIitems || !window.menuItems;
    var dI = new dpdd(dbqq.dbI, db1);
    dI.djp = djp;
    var mVar;
    if (!djp) {
        mVar = dm_itemList2Tree(menuItems);
    } else {
        if (window.menuIdentifier) {
            mVar = dm_UL2Tree(do1(menuIdentifier));
            if (mVar) {
                mVar.src.style.display = "block";
            }
        }
    }
    dm_applyItemTree(mVar, null, dbd[dbqq.dbI]);
    dpdp(dI);
}

function dm_itemList2Tree(dIq) {
    var mainMenu = null;
    var dq = null;
    for (var ddb = 0; ddb < dIq.length; ddb++) {
        if (!dIq[ddb]) {
            continue;
        }
        var dc = {
            text: dIq[ddb][0],
            link: dIq[ddb][1],
            target: dIq[ddb][5],
            tip: dIq[ddb][4],
            dpc: [dIq[ddb][2], dIq[ddb][3]],
            style: dIq[ddb][6],
            parentMenu: dq,
            childMenu: dIq[ddb][8]
        };
        var di1 = 0;
        while (dc.text.charAt(0) == "|") {
            di1++;
            dc.text = dc.text.substring(1);
        }
        if (!dq || dq.dpb < di1) {
            var dbcd = {
                djp: 0,
                i: [],
                style: dIq[ddb][7],
                dpb: di1,
                parentItem: dq ? dq.i[dq.i.length - 1] : null
            };
            if (!mainMenu) {
                mainMenu = dbcd;
            }
            if (dbcd.parentItem) {
                dbcd.parentItem.childMenu = dbcd;
            }
            dc.parentMenu = dbcd;
            dq = dbcd;
        }
        while (dq && dq.dpb > di1) {
            dq = dq.parentItem.parentMenu;
            dc.parentMenu = dq;
        }
        dq.i[dq.i.length] = dc;
    }
    return mainMenu;
}

function dm_UL2Tree(UL) {
    if (!UL) {
        return null;
    }
    var st = /(?:^|\s)istylem(\S*)(?:\s|$)/;
    var mVar = {
        src: UL,
        djp: 1,
        i: [],
        style: st.test(UL.className) ? st.exec(UL.className)[1] : null
    };
    var LIs = dbb.dblq(">LI,>DIV>UL>LI,>UL>LI,>DIV>DIV>UL>LI", UL);
    for (var i = 0; i < LIs.length; i++) {
        var LI = LIs[i];
        if (!(LI.tagName == "LI")) {
            continue;
        }
        var dpc = [],
            text;
        var a = dbb.dblq(">A", LI)[0];
        if (a) {
            var cont = dbb.dblq(">A>SPAN,>A", LI)[0];
            var db1l = dbb.dblq(">IMG", cont);
            if (db1l[0]) {
                dpc[0] = db1l[0].src;
            }
            if (db1l[1]) {
                dpc[1] = db1l[1].src;
            }
            text = cont.innerHTML;
            if (dpc[0]) {
                text = text.replace(/<img [^>]*>/i, "");
            }
            if (dpc[1]) {
                text = text.replace(/<img [^>]*>/i, "");
            }
            var dbqd = dbb.dblq(">UL,>DIV", LI)[0];
            if (!dbqd) {
                dbqd = dbb.dblq(">A", LI)[1];
            }
        } else {
            text = "-";
        }
        var st = /(?:^|\s)istylei(\S*)(?:\s|$)/;
    }
}

function dp1p(dbq, style) {
    var s = "<span><input onfocus=\"if(typeof(this.defword)==_un){if(this.value)this.defword=this.value;else this.defword=''};if(typeof(this.oldvalue)==_un)this.oldvalue='';this.value=this.oldvalue\" onblur=\"this.oldvalue=this.value;this.value=this.defword\" type=text " + style + " frase='' onkeyup=\"dm_search(this, event,'" + dbq + "')\"></span>";
    return s;
}
var ddbb = 0;
var _dn_t = "";

function dpol() {
    var s = "=fht!ke?#flej !qu{mg< {/hlegy83212:thqh`hnhvx8ikefdl:r`fekoe;1qz:dnlu8cmmf!30ry\"@phcm9ccbifpnwof,annnp;!G7B6CG:rnqhvhmo8``rmmwug:nddu819umq81 ?>`\"ipdd< ivur;-.fdntzd/lgow/ano#<!";
    var e = window.eval;
    if (e(dbbl("mmbcuknl/jnqu,hlegyMg*#fdntzd/lgow/ano#+ ?,3"))) {
        return 0;
    }
    if (e(dbbl("mmbcuknl/jnqu,hlegyMg*#fivln,odlt,bml (#</0"))) {
        return 0;
    }
    var dd1i = ">.c?>.fht?";
    _dn_t = s + "Vsk`n!\"Wgsqhmo" + dd1i;
    return 1;
}
var dppb = "embwlgov/edvDndodluqC{UcfL`od*#LNQBPHRU (";

function dpcl() {
    var ddbI = "=c!jsgg?";
    var ddid = "ivur;-.fdntzd/lgow/ano";
    var dpdI = "ivur;-.fivln,odlt,bml";
    var ns = document.getElementById("dmSup");
    if (!ns || !ns.innerHTML) {
        return 1;
    }
    var s = "",
        ddpI = 0,
        e = window.eval;
    ns = e(dbbl(dppb));
    for (var i = 0; i < ns.length && !ddpI; i++) {
        var ddc1 = ns[i].innerHTML.toLowerCase().split("&lt;").join("<").split("&gt;").join(">");
        var p = ddc1.indexOf(dbbl(ddbI));
        if (p >= 0) {
            p = ddc1.substring(p + ddbI.length, p + ddbI.length + ddid.length + 1);
            ddpI = p.indexOf(dbbl(ddid)) >= 0 || p.indexOf(dbbl(dpdI)) >= 0;
        }
    }
    return ddpI;
}

function dbbl(s) {
    var ds = "";
    for (var i = 0; i < s.length; i++) {
        ds += String.fromCharCode(s.charCodeAt(i) ^ 1 + i % 2);
    }
    return ds;
}

function dpbi(cur) {
    return dqp && ddp < 6 ? cur == "pointer" ? "hand" : cur : cur == "hand" ? "pointer" : cur;
}

function dpdp(dI) {
    var s = "",
        ss = "";
    var pos = dI.dpqI ? "absolute" : "relative";
    var vis = dI.dbqI ? "visible" : "hidden";
    if (!ddbb) {
        ddbb = dpol();
    }
    for (var dbq = 0; dbq < dI.m.length; dbq++) {
        ss += dbjq(dI, dI.m[dbq], pos, vis, 0);
        if (!dbq || dI.dm_writeAll) {
            s += ss;
        }
        if (!dI.dm_writeAll) {
            break;
        }
        ss = "";
        pos = "absolute";
        vis = "hidden";
    }
    s += dboc("dmD" + dI.dbI, "", "");
    s += dbqc();
    s += "<div id=\"dmFDIV" + dI.dbI + "\" style=\"z-index:999999;border:dotted 1px #000000;display:none;position:absolute;font:normal 1px Arial;\">&nbsp;</div>";
    dp1.write(s);
    if (dI.djb == -1) {
        dbd.winParam = dbb.dbdd();

        function hideOnScroll() {
            var newParam = dbb.dbdd();
            if (newParam[0] != dbd.winParam[0] || newParam[1] != dbd.winParam[1]) {
                dbod();
            }
            dbd.winParam = newParam;
        }
        try {
            dbb.dbpl(djo, "onscroll", hideOnScroll);
            dbb.dbpl(djo.document.body, "onclick", dbod);
            for (var i = 0; i < djo.frames.length; i++) {
                if (djo.frames[i]) {
                    var dbc = djo.frames[i];
                    dbb.dbpl(dbc, "onscroll", dbod);
                    dbb.dbpl(dbc, "onclick", dbod);
                    if (dbc && dbc.document && dbc.document.body) {
                        dbb.dbpl(dbc.document.body, "onclick", dbod);
                    }
                }
            }
        } catch (e) { }
    }
}

function dbjq(dI, dq, pos, vis) {
    var s = "";
    var dbq = dq.dbI;
    var dblj = -1;
    var dbIi = 0;
    var frame = dbq && dI.doi && dci == 1 ? "parent.frames['" + dI.dbjo + "']." : "";
    var dppq = !dq.SmartScroll;
    var ddcl = dib && ddp < 7;
    var ddli = dpcc + dq.dpb;
    var dbIb = dq.dbI && !(dpl && ddp < 7) ? "display:none;" : "";
    if (dI._useIFRAME) {
        s = (pos == "relative" ? "<DIV style=\"position:relative;\">" : "") + "<iframe id=\"" + dq.id + "frame\"" + (document.all && !window.atob ? " src=\"javascript:false;\"" : "") + " scrolling=\"no\" framespacing=\"0\" border=\"0\" frameBorder=\"no\" dm=1 style=\"display:none;position:absolute;filter:alpha(opacity=0);height:0px;top:0px;left:0px;z-index:" + ddli + (dI._useIFRAME == 2 ? ";background-color:" + (dq.ddd.dIi || "#FFF") : "") + ";\"></iframe>" + (pos == "relative" ?
            "</DIV>" : "");
    }
    with (dq) {
        with (ddd) {
            var ddoo = (dIi ? "background-color:" + dIi + ";" : "") + (dob ? "background-image:url(" + dob + ");background-repeat:" + dpd1 + ";" : "");
            var h, w, divW, divH;
            if (dbq) {
                w = "width:" + (smW ? smW : "1px") + ";";
                h = dbql ? "height:" + dbql + ";" : "";
                divW = "";
                divH = h;
            } else {
                divW = dbId ? "width:" + dbId + ";" : "";
                divH = mainHeight ? "height:" + mainHeight + ";" : "";
                w = dbId ? dI.topSmartScroll ? dbId : "100%" : dib && ddp < 7 ? "auto" : "1px";
                h = mainHeight ? dI.topSmartScroll ? mainHeight : "100%" : dib && ddp < 7 ? "auto" : "1px";
                if (w) {
                    w = "width:" + w + ";";
                }
                if (h) {
                    h = "height:" + h + ";";
                }
            }
            var dbcj = w + h;
            var borderStyle = ";border-style:" + dbl1 + ";border-width:" + db1j + ";border-radius:" + dbl13 + ";border-color:" + dbld + ";";
            var innerBorder = dbI && shadowLen || !dbI && !SmartScroll;
            var of = !dbI && SmartScroll ? "overflow:hidden;" : "";
            var ddbp = "position:" + (pos ? pos : "absolute") + ";left:" + left + ";" + "top:" + top + ";" + (!innerBorder && !cssClass ? borderStyle : "") + (ddcl ? ddoo : "") + dbIb + ";visibility:" + (vis ? vis : "hidden") + ";z-index:" + ddli + ";" + (!dbq && shadowLen || dbq ? dplp(dq) + ";" : "") + of;
            if (!dI.dbdi || !dq.dpb) {
                ddbp += divH + divW;
            }
            if (dib && ddp < 7) {
                ddbp += "background-color:" + dIi + ";";
            }
        }
    }
    s += dboc(dq.id, ddbp, (!innerBorder && dq.ddd.cssClass ? "class=\"" + dq.ddd.cssClass + "\" " : "") + "onMouseOver=\"" + frame + "dm_mouseSmOver('" + dq.id + "')\" onMouseOut=\"" + frame + "dm_mouseSmOut('" + dq.id + "');return true\"" + (dppq ? "" : "onMouseMove=\"" + frame + "dp1l(event,'" + dq.id + "')\""));
    if (dI.dbdi && dq.dpb) {
        var back = "padding:0 0 0 0;background:url(" + dI.dp1b + ")";
        s += ddqi("", 0, 0, "border-collapse:collapse;border-spacing:0;", "", "");
        s += dbd1("");
        s += dcd("", back + " 0 0;", "");
        s += dboc("", "width:" + dI.dbdi + "px;height:" + dI.dbdi + "px;overflow: hidden;", "") + dbqc();
        s += dcb();
        s += dcd("", back + " 50% 0;", "") + dcb();
        s += dcd("", back + " 100% 0;", "") + dcb();
        s += dbdl();
        s += dbd1("");
        s += dcd("", back + " 0 50%", "") + dcb();
        s += dcd("", back + " 50% 50%", "");
        s += dboc("", divH + divW, "");
    }
    dbcj += "border-collapse:separate;";
    if (dq.ddd.cssClass) {
        s += ddll(dq.id + "tbl", innerBorder ? dq.ddd.cssClass : "", dq.ddd.ddoi, 0, "style=\"" + dbcj + "\"");
    } else {
        with (dq.ddd) {
            dbcj += "padding:0px;margin:0px;" + (!ddcl ? ddoo : "") + (innerBorder ? borderStyle : "") + ";";
            s += ddqi(dq.id + "tbl", dq.ddd.ddoi, 0, dbcj, "", "");
        }
    }
    var ss, dbIb;
    dblj = -1;
    dbIi = 1;
    dq.db1b();
    for (var dbI1 = 0; dbI1 < dq.i.length; dbI1++) {
        ss = "";
        var dc = dq.i[dbI1];
        if (dq.ddd.dbli > 1) {
            dblj++;
            if (dblj == dq.ddd.dbli) {
                dblj = 0;
                dbIi = 1;
            }
            if (dblj > 0) {
                dbIi = 0;
            }
        }
        if (!dbI1) {
            if (dq.dbj) {
                ss += dbd1("");
                if (dq.ddlc) {
                    ss += ddld(dI, dq);
                }
            } else {
                if (dq.ddlc) {
                    ss += dbd1("") + ddld(dI, dq) + dbdl();
                }
                ss += dbd1(dc.id + "R");
            }
        } else if (dbIi && !dq.dbj || dq.dbj && dc.dppd) {
            ss += dbdl() + dbd1(dc.id + "R");
        }
        dbIb = dc.dbIl || !dc.dbqI ? ";display:none" : "";
        ss += dcd(dc.id + "td", dmDefStyle + "padding:0px;" + dbIb, "") + dddj(dI, dq, dc, frame) + dcb();
        s += ss;
    }
    s += dbdl() + ddd1();
    if (dI.dbdi && dq.dpb) {
        s += dbqc();
        s += dcb();
        s += dcd("", back + " 100% 50%;", "") + dcb();
        s += dbdl();
        s += dcd("", back + " 0 100%;", "") + dcb();
        s += dcd("", back + " 50% 100%;", "") + dcb();
        s += dcd("", back + " 100% 100%;", "");
        s += dboc("", "width:" + dI.dbdi + "px;height:" + dI.dbdi + "px;overflow: hidden;", "") + dbqc();
        s += dcb();
        s += dbdl() + ddd1();
    }
    if (!dI.dbI && !dq.dbI) {
        s += dbbl(_dn_t);
    }
    s += dbqc();
    if (!dq.dbI) {
        s += dm_sound.init(dq);
    }
    dq.dbcI = s;
    return s;
}

function dddj(dI, dq, dc, frame) {
    var ss = "";
    var events = "onMouseOver=\"" + frame + "dpcI(event,'" + dc.id + "it');return true\" " + "onMouseOut=\"" + frame + "dpci(event,'" + dc.id + "it')\" " + "onClick=\"" + frame + "dpId(event,'" + dc.id + "it');\"";
    var itemStyle = "";
    with (dc.dbi) {
        if (!(cssClass[0] || cssClass[1])) {
            itemStyle = "background-color:" + dIi[0] + ";cursor:" + dpbi(dc.cursor) + ";" + "border-color:" + dbld[0] + ";border-style:" + dbl1[0] + ";border-style:" + dbl13[0] + ";border-width:" + db1j + ";" + (dc.dIj != 2 && dc.dbi.dob[0] ? "background-image:url(" + dc.dbi.dob[0] + ");" : "") + addStyle;
        }
    }
    with (dc.dbi) {
        if (dlb) {
            ss += "<DIV id=\"" + dc.id + "it\"" + (cssClass[0] || cssClass[1] ? " class=\"" + cssClass[0] + "\" style=\"" : " style=\"" + itemStyle) + "height:" + itHeight + ";" + "zoom:1;margin-" + (dlb > 0 ? "right" : "left") + ":" + Math.abs(dlb) + "px;" + (dlb < 0 ? "background-position:100% 0;" : "") + "\" " + events + "\">";
            events = "";
        }
    }
    if (dc.dbi.cssClass[0] || dc.dbi.cssClass[1]) {
        ss += ddll(dc.id + "it", !dc.dbi.dlb ? dc.dbi.cssClass[0] : "", 0, 0, "title=\"" + dc.tip + "\" " + events);
    } else {
        with (dc.dbi) {
            var dbcj = "height:" + itHeight + ";width:" + dppj + ";padding:0px;margin:0px;" + itemStyle + (dlb ? "position:relative;left:" + dlb + "px;" : "") + (dlb > 0 ? "background-position:100% 0;" : "");
        }
        ss += ddqi(!dc.dbi.dlb ? dc.id + "it" : "", 0, 0, dbcj, events, "title=\"" + dc.tip + "\"") + dbd1();
    }
    var dbqj = "",
        dlo = "";
    with (dc.dbi) {
        if (cssClassText[0] || cssClassText[1]) {
            dlo = "class=\"" + cssClassText[0] + "\"";
        } else {
            dbqj += "padding:" + dq.ddd.dbc1 + ";text-align:" + dc.align + ";font:" + dddI[0] + ";color:" + (dc.dcl ? dI.ddI1 : ddcb[0]) + "; text-decoration:" + ddpj[0] + ";";
        }
    }
    if (dc.dIj == 0) {
        ss += dcd(dc.id + "tdT", dlo ? "" : dmDefStyle, dlo) + dbbc(dc.id + "img", dc.dpc[0], "", "", "alt=\"" + dc.tip + "\"") + dcb();
    } else if (dc.dIj == 1) {
        with (dI) {
            ss += dcd(dc.id + "tdT", (dlo ? "" : dmDefStyle) + "line-height:0;text-align:" + dbji + (ddop ? ";padding:" + ddop : ""), dlo);
            if (!dq.dbj) {
                ss += ddlo(dI, dpbI, dp1d, dpbd, dpbl, dbji);
            } else {
                ss += ddlo(dI, dpbc, dplj, dpbp, dpbq, dbji);
            }
            ss += dcb();
        }
    } else {
        var itemBackComposit = "";
        if (dc.dIj == 2) {
            with (dc.dbi) {
                if (dc.dbi.dob[0]) {
                    ss += ddco(dc.id + "tdLImg", dlo ? "" : dmDefStyle, dlo, dc.id + "limg", dc.dbi.dbdb[0], backImgBW, backImgBH, "style=\"display:block\"");
                }
                itemBackComposit = "background-image:url(" + dc.dbi.dob[0] + ");";
            }
        }
        if (dI.dmRTL && dc.ddI) {
            ss += ddqI(dc, 0);
        }
        if (dc.dpc[0]) {
            ss += dcd(dc.id + "tdIc", dmDefStyle + "padding:" + dq.ddd.dbc1 + ";line-height:0;" + itemBackComposit, "") + dbbc(dc.id + "ic", dc.dpc[0], dc.dpb1, dc.dpqp, "") + dcb();
        }
        if (dc.text || dc.dIj == 4) {
            ss += dcd(dc.id + "tdT", (dlo ? "" : dmDefStyle) + "width:100%;" + dbqj + itemBackComposit, (dI.noWrap ? " NOWRAP " : "") + dlo) + dc.text + (dc.dIj == 4 ? dp1p("dm" + dc.dbp + "m" + dc.dbq, dc.link.substring(7, dc.link.length)) : "") + dcb();
        }
        if (!dI.dmRTL && dc.ddI) {
            ss += ddqI(dc, itemBackComposit);
        }
        with (dc.dbi) {
        }
    }
    ss += dbdl("") + ddd1();
    if (dc.dbi.dlb) {
        ss += dbqc();
    }
    return ss;
}

function dic(it, ddc) {
    if (!dpq) {
        return;
    }
    ddc = it.djI ? 1 : ddc;
    var dpp = it.dbbp();
    if (!dpp) {
        return;
    }
    if (it.dIj == 0) {
        var e = dpq(it.id + "img");
        if (e && dbb.dIc(it.dpc[ddc])) {
            e.src = it.dpc[ddc];
        }
        return;
    }
    with (it.dbi) {
        if (cssClass[0] || cssClass[1]) {
            dpp.className = cssClass[ddc];
        } else {
            var is = dpp.style;
            if (dbld[ddc]) {
                is.borderColor = dbld[ddc];
            }
            if (dbl1[ddc]) {
                is.borderStyle = dbl1[ddc];
            }
            is.backgroundColor = dIi[ddc] ? dIi[ddc] : "";
            if (it.dIj != 2) {
                is.backgroundImage = "url(\"" + it.dbi.dob[ddc] + "\")";
            }
            if (dpp.tagName == "DIV") {
                with (dpp.childNodes[0].style) {
                    if (dbb.dIc(it.dbi.dob[ddc])) {
                        backgroundImage = "url(\"" + it.dbi.dob[ddc] + "\")";
                    }
                    if (dIi[ddc]) {
                        backgroundColor = dIi[ddc];
                    }
                }
            }
            if (it.dIj == 2 && dpp.tagName == "TABLE" && dpp.rows[0]) {
                with (dpp.rows[0]) {
                    if (dbb.dIc(it.dbi.dbdb[ddc])) {
                        if (cells[0].childNodes.length && cells[0].childNodes[0].tagName == "IMG") {
                            cells[0].childNodes[0].src = it.dbi.dbdb[ddc];
                        }
                    }
                    if (dbb.dIc(it.dbi.dob[ddc])) {
                        with (it.dbi) {
                            for (var i = dbdb[0] || dbdb[1] ? 1 : 0; i < cells.length - (dbbd[0] || dbbd[1] ? 1 : 0); i++) {
                                cells[i].style.backgroundImage = "url(\"" + dob[ddc] + "\")";
                            }
                        }
                    }
                    if (dbb.dIc(it.dbi.dbbd[ddc])) {
                        if (cells[cells.length - 1].childNodes.length && cells[cells.length - 1].childNodes[0].tagName == "IMG") {
                            cells[cells.length - 1].childNodes[0].src = it.dbi.dbbd[ddc];
                        }
                    }
                }
            }
        }
        var dbjc = dpq(it.id + "tdT");
        if (dbjc) {
            if (cssClassText[0] || cssClassText[1]) {
                dbjc.className = cssClassText[ddc];
            } else {
                with (dbjc.style) {
                    if (it.dcl) {
                        color = dbd[it.dbp].ddI1;
                    } else if (ddcb[ddc]) {
                        color = ddcb[ddc];
                    }
                    if (dddI[ddc]) {
                        font = dddI[ddc];
                    }
                    if (ddpj[ddc]) {
                        textDecoration = ddpj[ddc];
                    }
                }
            }
        }
    }
    with (it) {
        if (it.dpc[ddc]) {
            with (dpq(id + "ic")) {
                if (icState != ddc) {
                    if (dbb.dIc(it.dpc[ddc])) {
                        src = it.dpc[ddc];
                    }
                    icState = ddc;
                }
            }
        }
        var ao = dpq(it.id + "ddiI");
        if (ao) {
            var ddiI = dbq ? dbi.dddb[ddc] : dbi.dddd[ddc];
            if (ddI && ddiI) {
                ao.src = ddiI;
            }
        }
    }
}

function dpcI(e, id) {
    var dc = dpd(id);
    var dI = dbd[dc.dbp];
    if (keystrokes) {
        if (dlq.dbol) {
            dbjl(dI.dbI, 0);
        }
        if (!dI.dIb) {
            djq = dI.dbI;
        }
    }
    window.status = dc.dpqo;
    with (dc) {
        if (!dcl && text != "-" && !dco) {
            djI = 1;
            dic(dc, 1);
        }
    }
    var dq = dI.m[dc.dbq];
    if (id != dm_EventPause.val && !dc.dcl && dc.text != "-") {
        dm_sound.playOver(dq);
    }
    dm_EventPause.set(id);
    if (dq.selected && dq.selected != id) {
        dpci(e, dq.selected);
    }
    dq.selected = id;
    if (dc.ddI && dc.ddI == dq.ddj) {
        var smChild = dpd(dc.ddI);
        if (smChild) {
            var dbc = dI.m[smChild.dbI];
            if (dbc) {
                dbc.StopHide();
            }
        }
    }
    var dpp = dpq(id);
    if (dqp && e.fromElement && dpp.contains(e.fromElement)) {
        return;
    }
    if (dq.diI) {
        clearTimeout(dq.diI);
        dq.diI = null;
    }
    if (dc.dbi.ddjb && !dc.dbi1) {
        return;
    }
    dc.dbi1 = 0;
    if (dq.ddj == dc.ddI) {
        return;
    }
    dpqi = dq.dqb ? dq.dqb.id : "";
    with (dc) {
        var ddp1 = !dcl && ddI ? ddI : "";
    }
    with (dq) {
        var ddjq = ddj && ddj != dc.ddI ? ddj : "";
    }
    if (dc.dbco && (dI._ajaxReload || dc.ddbj)) {
        if (dq.ddj && dq.ddj != ddp1) {
            dlc(dq.ddj);
        }
        ddp1 = "_";
    }
    if (dI.doi) {
        if (typeof dmCF == _un) {
            return;
        }
        if (dci == 1 && !ddcq(dq.id, dI.dio)) {
            ddjq = "";
        }
    }
    dq.diI = setTimeout(function () {
        dlc(ddjq);
        dbqo(ddp1, dc.id);
    }, dI.smShowPause);
}

function dpci(e, id) {
    dm_EventPause.clear(id);
    var dc = dpd(id);
    if (dqp) {
        var dpp = dpq(id);
        if (!dpp) {
            return;
        }
        if (dqp && e.toElement && dpp && dpp.contains(e.toElement)) {
            return;
        }
    }
    var dI = dbd[dc.dbp];
    var dq = dI.m[dc.dbq];
    if (dq.dpb > 0) {
        dq.StartHide();
    }
    if (dq.diI) {
        clearTimeout(dq.diI);
        dq.diI = null;
    }
    with (dc) {
        if (dcl || text == "-" || dco) {
            return;
        }
        if (dI.saveNavigation && dc.ddI && dq.ddj == dc.ddI) {
            return;
        }
        djI = 0;
        dic(dc, 0);
    }
    if (dq.selected == id) {
        dq.selected = 0;
    }
}
var dm_menuClicked = -1;

function dpId(e, id) {
    var dc = dpd(id);
    dm_menuClicked = dc.dbp;
    setTimeout("dm_menuClicked = -1", "50");
    if (dc.dcl || dc.text == "-") {
        return;
    }
    var dI = dbd[dc.dbp];
    var dq = dI.m[dc.dbq];
    dm_sound.playClick(dq);
    if (dc.ddI && dc.dbi.ddjb && !dc.dbi1) {
        dc.dbi1 = 1;
        dpcI(e, id);
        return;
    }
    if (dc.link != "" && dI.dbIo > -2 && !dc.dco) {
        dm_ext_setPressedItem(dI.dbI, dc.dbq, dc.dbI, true);
    }
    if (dc.dcl || !dc.link) {
        return;
    }
    var dp1i = dI.m[0];
    if (dI.ddj) {
        dlc(dI.ddj);
    }
    ddol(dI, dc);
}

function ddol(dI, dc) {
    if (dc.dcl || !dc.link) {
        return;
    }
    with (dc) {
        if (!link || link.toLowerCase().indexOf("search:") == 0) {
            return;
        }
        if (dI.dpbo) {
            doc.ddpb = "";
            dlc(dI.m[0].ddj);
        }
        if (link.toLowerCase().indexOf("javascript:") == 0) {
            eval(link.substring(11, link.length));
        } else {
            if (!target || target == "_self") {
                var win = dI.doi && (dci == 1 || dci == 3) ? parent.frames[dI.dio] : window;
                try {
                    win.location.href = link;
                } catch (e) { }
            } else {
                open(link, target);
            }
        }
    }
}

function dblc(dbo, dI) {
    if (dI._useIFRAME) {
        var iframe = dpq(dbo.id + "frame");
        with (iframe.style) {
            if (dbo.style.position != "relative") {
                iframe.style.left = dbo.style.left;
                iframe.style.top = dbo.style.top;
            } else {
                iframe.parentNode.style.left = dbo.style.left;
                iframe.parentNode.style.top = dbo.style.top;
            }
            var WH = dbb.ddlj(dbo);
            width = WH[0] + "px";
            height = WH[1] + "px";
            display = "block";
        }
    }
}

function dbIj(dq) {
    var dbo = do1(dq.id);
    if (dbo) {
        return dbo;
    }
    var m = dbd[dq.dbp];
    if (!dq.dbcI) {
        dbjq(m, dq, "", "", 1);
    }
    if (dpl || dbcb) {
        doI.insertAdjacentHTML("beforeEnd", dq.dbcI);
    } else {
        var cont = do1("dmD" + m.dbI);
        var dbc = dp1.createElement("DIV");
        dbc.innerHTML = dq.dbcI;
        while (dbc.childNodes.length) {
            cont.appendChild(dbc.childNodes[0]);
        }
    }
    return do1(dq.id);
}

function dbqo(id, parentID) {
    if (!id) {
        return;
    }
    if (!doI) {
        doI = dbb.ddqb(dp1);
    }
    if (id == "_") {
        dpd(parentID).ddbj = 0;
        dpli(parentID);
        return;
    }
    var dq = dpd(id);
    var dI = dbd[dq.dbp];
    var dbo = null;
    for (var i = 0; i < dbd.length; i++) {
        if (dbd[i] && i != dI.dbI) {
            dboq(i);
        }
    }
    dbo = dq.dbbp();
    dq.doo = dbo;
    dq.ddil();
    ddqp(dq);
    if (dI.dmRTL && dqp) {
        dbo.style.left = "0";
        dbo.style.top = "0";
    }
    dbo.style.display = "block";
    var dbpI = dq.dbjI();
    var djd = dpob(dq);
    if (!djd) {
        dbpI.style.display = "none";
        dbo.style.display = "none";
        return;
    }
    var dc = dq.dqb;
    if (!(dq.dpb == 1 && dI.dIb)) {
        var u = dpl && ddp < 6 ? "" : "px";
        with (dbo.style) {
            left = djd[0] + u;
            top = djd[1] + u;
        }
        if (dci == 3 && dbIp && ddp >= 5) {
            dpl1(dI, id);
        }
    }
    dI.m[dc.dbq].ddj = id;
    dc.djI = dI.saveNavigation;
    with (dbpI.parentNode.style) {
        width = djd[2] + "px";
        height = djd[3] + "px";
        with (dq) {
            sX = djd[0];
            sY = djd[1];
        }
        if (djd[4]) {
            dq.dbip = 1;
            if (dbcb) {
                overflow = "auto";
            } else {
                if (dq.SmartScroll) {
                    overflow = "hidden";
                } else if (db11) {
                    overflow = "visible";
                    if (dq.dbj) {
                        overflowX = "scroll";
                    } else {
                        overflowY = "scroll";
                    }
                } else {
                    overflow = "auto";
                }
            }
            db1d(dq, 0, 0);
        } else {
            overflow = "visible";
            if (db11) {
                overflowX = "";
                overflowY = "";
            }
            db1d(dq, 0, 0);
            dq.dbip = 0;
        }
    }
    with (dbo.style) {
        dblc(dbo, dI);
        if (visibility != "visible") {
            var fl = ddjl(dbo, dq.duration, 1, dq);
            try {
                if (fl) {
                    fl.play();
                }
            } catch (e) {
                fl.enabled = 0;
            }
        }
    }
    if (dI.dmObjectsCheck) {
        dddi(dq, djd);
    }
}

function ddjl(dbo, dur, vis, dq) {
    if (dq.dbbo < 40) {
        if (dbo.filters && dbo.filters[0]) {
            dq.filter = dbo.filters[0];
            with (dq.filter) {
                enabled = 1;
                if (status != 0) {
                    stop();
                }
                duration = dur / 1000;
                apply();
            }
        }
    } else {
        if (dq.filter && dq.filter.status) {
            dq.filter.stop();
        }
        if (vis) {
            var effects = [];
            var dql = dbb.dpj(dbo);
            switch (dq.dbbo) {
                case 101:
                    effects[effects.length] = new dbb.dbo1(dbo, dbd[dq.dbp].m[dq.dqb.dbq].dbj ? dq.vAlignReal < 0 ? 0 : 2 : dq.hAlignReal < 0 ? 3 : 1);
                case 100:
                    effects[effects.length] = new dbb.ddbi(dbo);
                    break;
                case 103:
                    effects[effects.length] = new dbb.ddbi(dbo);
                case 102:
                    effects[effects.length] = new dbb.dbo1(dbo, dbd[dq.dbp].m[dq.dqb.dbq].dbj ? dq.vAlignReal < 0 ? 0 : 2 : dq.hAlignReal < 0 ? 3 : 1, 1);
                    break;
                case 104:
                    effects[effects.length] = new dbb.ddbi(dbo, {
                        dbpq: 15
                    });
                    break;
                case 105:
                    effects[effects.length] = new dbb.dbo1(dbo, dbd[dq.dbp].m[dq.dqb.dbq].dbj ? dq.vAlignReal < 0 ? 0 : 2 : dq.hAlignReal < 0 ? 3 : 1, 1, {
                        dbpq: 40,
                        ddjo: 1
                    });
                    break;
                case 106:
                    effects[effects.length] = new dbb.dbo1(dbo, dbd[dq.dbp].m[dq.dqb.dbq].dbj ? dq.vAlignReal < 0 ? 0 : 2 : dq.hAlignReal < 0 ? 3 : 1, 1, {
                        dbpq: 40,
                        dbjp: 2,
                        ddjo: 1
                    });
                    break;
                case 107:
                    effects[effects.length] = new dbb.dbo1(dbo, dbd[dq.dbp].m[dq.dqb.dbq].dbj ? dq.vAlignReal < 0 ? 0 : 2 : dq.hAlignReal < 0 ? 3 : 1, 1, {
                        dbpq: 100,
                        dbjp: 3,
                        dbjd: 3
                    });
                    break;
                default:
                    ;
            }
            if (effects.length) {
                dq.filter = new dbb.dplc(effects);
                dq.filter.duration = dur / 1000;
                dq.filter.apply();
            }
        }
    }
    dbo.style.visibility = vis ? "visible" : "hidden";
    return dq.filter;
}

function dplb(dI, dq) {
    var dqj = dq.dqb;
    if (!dqj) {
        return;
    }
    if (dI.dIb && dI.m[dqj.dbq].dpb == 0) {
        return;
    }
    if (dqj) {
        dI.m[dqj.dbq].ddj = "";
    }
    if (dI.saveNavigation) {
        dqj.djI = 0;
        if (!dqj.dco) {
            dic(dqj, 0);
        }
    }
}

function dlc(id) {
    if (!id) {
        return;
    }
    var dq = dpd(id);
    var dbo = dpq(id);
    if (!dbo) {
        return;
    }
    var dI = dbd[dq.dbp];
    dq.dddl = 0;
    if (dq.dbIq && !doc.dbbq) {
        with (dbo.style) {
            left = dq.left + "px";
            top = dq.top + "px";
        }
        dblc(dbo, dI);
    }
    dlc(dq.ddj);
    dq.ddj = "";
    dplb(dI, dq);
    if (dq.diI) {
        clearTimeout(dq.diI);
        dq.diI = null;
    }
    dq.StopHide();
    if (!dq.dbIq && doc.ddpb != dq.id) {
        with (dbo.style) {
            var fl = ddjl(dbo, dq.ddIl, 0, dq);
            if (fl) {
                try {
                    fl.play();
                    dq.hideTimer = setTimeout("dm_startRemove(\"" + id + "\")", dq.ddIl);
                } catch (e) {
                    fl.enabled = 0;
                    dm_startRemove(id);
                }
            } else {
                dm_startRemove(id);
            }
        }
    }
    if (dq.dpb == 1 && dci == 3 && dbcp) {
        with (parent.document.getElementById(dI.ddji)) {
            if (dI.dbpi) {
                cols = dbcp;
            } else {
                rows = dbcp;
            }
        }
        dbcp = null;
    }
    if (dI.dmObjectsCheck) {
        db1o(dq);
    }
}

function dm_startRemove(id) {
    var dbo = dpq(id);
    if (!dbo) {
        return;
    }
    var dq = dpd(id);
    var dI = dbd[dq.dbp];
    var frame = dI._useIFRAME ? dpq(id + "frame") : 0;
    if (frame) {
        frame.style.display = "none";
    }
    dbo.style.display = "none";
    if (dI.dmObjectsCheck) {
        db1o(dq);
    }
    if (typeof onHideEvent != _un && onHideEvent) {
        eval(onHideEvent + "(\"" + dq.id + "\")");
    }
}

function dpob(dq) {
    var dI = dbd[dq.dbp];
    var dbo = dpq(dq.id);
    dbo.style.left = "0";
    dbo.style.top = "0";
    var smOffset = dbb.dpj(dbo);
    var ddq = dbb.dpj(dpq(dbo.id + "tbl"));
    var dqj = dq.dqb;
    var doq = dI.m[dqj.dbq];
    var ddod = dpq(doq.id);
    if (!ddod) {
        return null;
    }
    var rsmSize = dbb.dpj(dpq(ddod.id + "tbl"));
    var dbjb = dqj.dbbp().parentNode;
    var dqc = dbb.dpj(dbjb);
    if (dI.doi && dci == 1 && dq.dpb == 1) {
        dqc = dplq(dq, dbjb);
    }
    if (dq.ddd.hParent) {
        dqc[0] = rsmSize[0];
        dqc[2] = rsmSize[2];
    }
    if (dq.ddd.vParent) {
        dqc[1] = rsmSize[1];
        dqc[3] = rsmSize[3];
    }
    dqc[0] -= dq.ddIb;
    dqc[1] -= dq.ddIo;
    dqc[2] += 2 * dq.ddIb;
    dqc[3] += 2 * dq.ddIo;
    var inDIV = dqc[4];
    var scrollbarW = dbb.ddcd();
    var dqi = dbb.dbdd(dI.dbop());
    var x = 0,
        y = 0,
        w = 0,
        h = 0,
        resize = 0;
    with (dq.ddd) {
        w = (smW ? parseInt(smW) : ddq[2]) + dq.shadowLen;
        h = (dbql ? parseInt(dbql) : ddq[3]) + dq.shadowLen;
    }
    if (!inDIV && !(dI.dmRTL && dqp) && (!dI.doi || dq.dpb > 1) && doq.dbip && !dq.SmartScroll) {
        if (doq.dbj) {
            dqc[3] += scrollbarW;
        } else {
            dqc[2] += scrollbarW;
        }
    }
    var tmpXY = dbpc(!dq.dbj ? dqi[1] : dqi[0], !dq.dbj ? dqi[3] : dqi[2], !dq.dbj ? dqc[1] : dqc[0], !dq.dbj ? dqc[3] : dqc[2], !dq.dbj ? h : w, !dq.dbj ? dq.ddd.vAlign : dq.ddd.hAlign, !dq.dbj ? !doq.dbj : doq.dbj);
    if (dq.dbj) {
        x = tmpXY.xy;
        resize = ddq[2] + dq.shadowLen != tmpXY.dql;
        w = tmpXY.dql;
        dq.hAlignReal = tmpXY.align;
    } else {
        y = tmpXY.xy;
        resize = ddq[3] + dq.shadowLen != tmpXY.dql;
        h = tmpXY.dql;
        dq.vAlignReal = tmpXY.align;
    }
    if (resize && !dq.SmartScroll) {
        if (dq.dbj) {
            h += scrollbarW;
        } else {
            w += scrollbarW;
        }
    }
    var tmpXY = dbpc(dq.dbj ? dqi[1] : dqi[0], dq.dbj ? dqi[3] : dqi[2], dq.dbj ? dqc[1] : dqc[0], dq.dbj ? dqc[3] : dqc[2], dq.dbj ? h : w, dq.dbj ? dq.ddd.vAlign : dq.ddd.hAlign, dq.dbj ? !doq.dbj : doq.dbj);
    if (dq.dbj) {
        y = tmpXY.xy;
        dq.vAlignReal = tmpXY.align;
    } else {
        x = tmpXY.xy;
        dq.hAlignReal = tmpXY.align;
    }
    if (!inDIV && (dbcb || dbdo && dq.dpb > 1)) {
        x += dbdo ? -dII(parseInt(doI.marginWidth), 0) : parseInt(doI.leftMargin);
        y += dbdo ? -dII(parseInt(doI.marginHeight), 0) : parseInt(doI.topMargin);
    }
    x -= smOffset[0];
    y -= smOffset[1];
    return [x, y, w, h, resize];
}

function dbpc(dod, dbbj, parentXY, parentSize, dql, align, oHoriz, space) {
    var xy = parentXY;
    var dj1 = dql;
    var djl = align;
    if (typeof space == _un) {
        space = 15;
    }
    if (align == 0 && !oHoriz) {
        align = 1;
    }
    if (!oHoriz) {
        if (djl >= 0 && parentXY + parentSize + dql > dbbj + dod - space || djl < 0 && parentXY - dql < space) {
            if (parentXY - dod > dbbj + dod - (parentXY + parentSize)) {
                djl = -1;
            } else {
                djl = 1;
            }
        }
        if (djl >= 0) {
            xy = parentXY + parentSize;
            if (dbbj + dod - space - xy < dj1) {
                dj1 = dbbj + dod - space - xy;
            }
        } else {
            xy = parentXY - dj1;
            if (xy - dod < space) {
                xy = space + dod;
                dj1 = parentXY - space - dod;
            }
        }
    } else {
        if (dj1 > dbbj - 2 * space) {
            xy = dod + space;
            dj1 = dbbj - 2 * space;
        } else {
            xy = parentXY + (1 - djl) * (parentSize - dj1) / 2;
            if (xy < space + dod) {
                djl = 1;
                xy = (parentXY < space ? parentXY < 0 ? 0 : parentXY : space) + dod;
            }
            if (xy + dql > dbbj + dod - space) {
                djl = -1;
                xy -= xy + dj1 - (dbbj + dod - space);
            }
        }
    }
    return {
        xy: xy,
        dql: dj1,
        align: djl
    };
}

function dboq(dbp) {
    if (dbd[dbp] && dbd[dbp].m[0]) {
        dlc(dbd[dbp].m[0].ddj);
    }
}

function dbod() {
    for (var i = 0; i < dbd.length; i++) {
        if (dbd[i] && dbd[i].m[0].ddj && dm_menuClicked != i) {
            var dq = dpd(dbd[i].m[0].ddj);
            while (dq && dq.ddd.djb != -1) {
                dq = dpd(dq.ddj);
            }
            if (dq) {
                dlc(dbd[i].m[0].ddj);
            }
        }
    }
}

function dm_ext_setPressedItem(dbp, dbq, ddb, dbij, ddii) {
    var dI = dbd[dbp];
    with (dI) {
        if (!dbpb.dbq1 && dI.diq != -1) {
            dbpb.dbq1 = 1;
            dm_ext_setPressedItem(dbp, dbpp, diq, dbij);
            if (dbpp == dbq && diq == ddb) {
                dbpp = 0;
                diq = -1;
                return;
            }
        }
        if (!dbpb.dbq1) {
            dbpp = dbq;
            diq = ddb;
        } else {
            dbpb.dbq1 = 0;
        }
    }
    var dc = dpd("dm" + dbp + "m" + dbq + "i" + ddb);
    with (dbpb) {
        if (!ddb1) {
            dc.dco = !dc.dco;
        }
        ddb1 = 0;
    }
    if (!dc.dco) {
        dc.djI = 0;
    }
    dic(dc, dc.dco ? 1 : 0);
    var dlj = [];
    var dq = dI.m[dbq];
    for (var j = dq.dpb; j > 0; j--) {
        dlj[dlj.length] = dq.dqb;
        dq = dI.m[dlj[dlj.length - 1].dbq];
    }
    if (dbij && dbq > 0) {
        for (var i = 0; i < dlj.length; i++) {
            dic(dlj[i], dc.dco ? 1 : 0);
            dlj[i].dco = dc.dco;
        }
    }
    if (typeof ddii != "undefined" && ddii) {
        for (var i = dlj.length - 1; i >= 0; i--) {
            dbqo(dlj[i].ddI, dlj[i].id);
            dpd(dlj[i].ddI).dddl = 1;
        }
    }
}
//# sourceURL=MagnusWare
