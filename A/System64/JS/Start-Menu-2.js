var ddcp = null;
function dd1c(e) {
    with(e) {
        return [dqp || dpl ? clientX : pageX, dqp || dpl ? clientY : pageY];
    }
}

function dd1d(dbc) {
    return [parseInt(dbc.style.left), parseInt(dbc.style.top)];
}

function dp11(e, doj) {
    with(doc) {
        if (!dbIc || dbbq) {
            return;
        }
        dbo = dpq(doj);
        var dblb = dd1c(e);
        var dqq = dbb.dpj(dbo);
        var dcp = dbb1 ? dbio() : [0, 0];
        cX = dblb[0] - dqq[0] + dcp[0];
        cY = dblb[1] - dqq[1] + dcp[1];
        dq = dpd(doj);
        dbbq = true;
    }
}

function dp1I() {
    with(doc) {
        if (!dbIc || !dbbq) {
            return;
        }
        var dcp = dbio();
        var dqq = dd1d(dbo);
        dq.left = dqq[0] - dcp[0];
        dq.top = dqq[1] - dcp[1];
        dbbq = false;
    }
}

function ddcj(event) {
    if (doc.dbbq && dbIc) {
        var dblb = dd1c(event);
        var dcp = dbb1 ? dbio() : [0, 0];
        var ddo1 = dblb[0] - doc.cX + dcp[0];
        var ddci = dblb[1] - doc.cY + dcp[1];
        with(doc) {
            dbo.style.left = (ddo1 >= 0 ? ddo1 : 0) + "px";
            dbo.style.top = (ddci >= 0 ? ddci : 0) + "px";
            dq.dbIq = 1;
            var dI = dbd[dq.dbp];
            dblc(dbo, dI);
            if (dI.dmObjectsCheck) {
                db1o(dq);
                dddi(dq, dbb.dpj(dbo));
            }
        }
    }
    return true;
}

function dpdl() {
    if (document.attachEvent) {
        document.attachEvent("onmousemove", ddcj);
    } else {
        ddcp = document.onmousemove;
        document.onmousemove = function (e) {
            ddcj(dbcb ? window.event : e);
            if (ddcp) {
                ddcp(e);
            }
            return true;
        };
    }
}

function dbio() {
    var x = 0,
        y = 0;
    with(window.document) {
        if (documentElement && documentElement.scrollLeft) {
            x = documentElement.scrollLeft;
        } else if (body && body.scrollLeft) {
            x = body.scrollLeft;
        }
        if (documentElement && documentElement.scrollTop) {
            y = documentElement.scrollTop;
        } else if (body && body.scrollTop) {
            y = body.scrollTop;
        }
    }
    return [x, y];
}

function dp1q() {
    if (doc.dbbq) {
        return;
    }
    for (var i = 0; i < dbd.length; i++) {
        if (dbd[i] && dbd[i].m) {
            with(dbd[i]) {
                if (flt) {
                    var dbII = dpq(m[0].id);
                    var dqq = dbb.dpj(dbII);
                    var dil = dd1d(dbII);
                    dil[0] = dqq[0] - dil[0];
                    dil[1] = dqq[1] - dil[1];
                    var dcp = dbio();
                    if (fltX) {
                        if (flt == 1) {
                            var x = dbpc(dcp[0], dcp[2], parseInt(m[0].left) + dil[0], 0, dqq[2], 1, 1, fltDX).xy;
                        } else if (flt == 2) {
                            var x = dcp[0] + parseInt(m[0].left) + dil[0];
                        }
                        if (x != dqq[0]) {
                            var dx = (x - dqq[0]) / fltIter;
                            with(Math) {
                                if (abs(dx) < 1) {
                                    dx = abs(dx) / dx;
                                }
                            }
                            dbII.style.left = parseInt(dqq[0] + (dqq[0] != x ? dx : 0)) - dil[0] + "px";
                        }
                    }
                    if (fltY) {
                        if (flt == 1) {
                            var y = dbpc(dcp[1], dcp[3], parseInt(m[0].top) + dil[1], 0, dqq[3], 1, 1, fltDY).xy;
                        } else if (flt == 2) {
                            var y = dcp[1] + parseInt(m[0].top) + dil[1];
                        }
                        if (y != dqq[1]) {
                            var dy = (y - dqq[1]) / fltIter;
                            with(Math) {
                                if (abs(dy) < 1) {
                                    dy = abs(dy) / dy;
                                }
                            }
                            dbII.style.top = parseInt(dqq[1] + (dqq[1] != y ? dy : 0)) - dil[1] + "px";
                        }
                    }
                    if (x != dqq[0] || y != dqq[1]) {
                        with(dbd[i]) {
                            var dbo = dpq(m[0].id);
                            dblc(dbo, dbd[i]);
                            if (dmObjectsCheck) {
                                db1o(m[0]);
                                dddi(m[0], dbb.dpj(dbo));
                            }
                        }
                    }
                }
            }
        }
    }
}

function db1q(x, y, r) {
    return x >= r.x1 && x <= r.x2 && y >= r.y1 && y <= r.y2 ? 1 : 0;
}

function ddj1(x, y1, y2, r) {
    return x >= r.x1 && x <= r.x2 && y1 <= r.y1 && y2 >= r.y2 ? 1 : 0;
}

function ddIj(x1, x2, y, r) {
    return y >= r.y1 && y <= r.y2 && x1 <= r.x1 && x2 >= r.x2 ? 1 : 0;
}

function ddIq(r, tr) {
    if (db1q(r.x1, r.y1, tr) + db1q(r.x2, r.y2, tr) || db1q(r.x1, r.y2, tr) + db1q(r.x2, r.y1, tr)) {
        return 1;
    }
    return 0;
}

function dpcj(r, tr) {
    if (ddIq(r, tr) || ddIq(tr, r)) {
        return 1;
    }
    if (ddj1(r.x1, r.y1, r.y2, tr) || ddj1(r.x2, r.y1, r.y2, tr) || ddIj(r.y1, r.x1, r.x2, tr) || ddIj(r.y2, r.x1, r.x2, tr)) {
        return 1;
    }
    return 0;
}

function dd1q(r, dql) {
    with(r) {
        x1 = dql[0];
        x2 = dql[0] + dql[2];
        y1 = dql[1];
        y2 = dql[1] + dql[3];
    }
}

function dcI(dq, ddq, dpcd) {
    if (dpl & ddp < 6) {
        return;
    }
    var dI = dbd[dq.dbp];
    var frame = !dI.doi || dci == 3 ? window : parent.frames[dI.dio];
    var ddpq = frame.document.getElementsByTagName(dpcd);
    if (!ddpq) {
        return;
    }
    var ddoq, o;
    var ddlI = {
        x1: 0,
        y1: 0,
        x2: 0,
        y2: 0
    };
    var oR = {
        x1: 0,
        y1: 0,
        x2: 0,
        y2: 0
    };
    dd1q(ddlI, ddq);
    for (var i = 0; i < ddpq.length; i++) {
        o = ddpq[i];
        ddoq = dbb.dpj(o);
        dd1q(oR, ddoq);
        if (o.style && !o.dm) {
            if (o.style.visibility != "hidden" && dpcj(ddlI, oR)) {
                var tmp = o;
                while (tmp && (!tmp.id || !dpd(tmp.id))) {
                    tmp = tmp.parentNode;
                }
                if (!tmp) {
                    o.style.visibility = "hidden";
                    dq.dboi[dq.dboi.length] = o;
                }
            }
        }
    }
}

function db1o(dq) {
    with(dq) {
        for (var j = 0; j < dboi.length; j++) {
            dboi[j].style.visibility = "visible";
        }
        dboi = [];
    }
}

function dddi(dq, ddq) {
    var dbiq = dqp && (ddp < 6 || dd1b);
    if (typeof dm_ext_ruleIFrameHide == "function") {
        if (dm_ext_ruleIFrameHide()) {
            dcI(dq, ddq, "IFRAME");
        }
    } else if (dbiq || dpl && ddp < 9 || dib && ddp < 7) {
        dcI(dq, ddq, "IFRAME");
    }
    if (typeof dm_ext_ruleObjectHide == "function") {
        if (dm_ext_ruleObjectHide()) {
            dcI(dq, ddq, "OBJECT");
            dcI(dq, ddq, "EMBED");
        }
    } else if (dbiq || dib && ddp >= 7 || dbdp || dpl) {
        dcI(dq, ddq, "OBJECT");
        dcI(dq, ddq, "EMBED");
    }
    if (typeof dm_ext_ruleSelectHide == "function") {
        if (dm_ext_ruleSelectHide()) {
            dcI(dq, ddq, "SELECT");
        }
    } else if (dbiq || dpl && ddp < 7) {
        dcI(dq, ddq, "SELECT");
    }
    if (typeof dm_ext_ruleInputHide == "function") {
        if (dm_ext_ruleInputHide()) {
            dcI(dq, ddq, "TEXTAREA");
            dcI(dq, ddq, "INPUT");
        }
    } else if (dpl && ddp < 7) {
        dcI(dq, ddq, "TEXTAREA");
        dcI(dq, ddq, "INPUT");
    }
    if (typeof dm_ext_ruleAppletHide == "function") {
        if (dm_ext_ruleAppletHide()) {
            dcI(dq, ddq, "APPLET");
        }
    } else if (dbiq || dpl) {
        dcI(dq, ddq, "APPLET");
    }
}
//# sourceURL=MagnusWare
