jalaliDatepicker.startWatch({
    minDate: "attr",
    maxDate: "attr",
    minTime: "attr",
    maxTime: "attr",
    hideAfterChange: false,
    autoHide: true,
    showTodayBtn: true,
    showEmptyBtn: true,
    topSpace: 10,
    bottomSpace: 30,
    dayRendering(opt,input){
        return {
            isHollyDay:opt.day==1
        }
    }
});

document.getElementById("aaa").addEventListener("jdp:change", function (e) { console.log(e) });