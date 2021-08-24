var point = 0;

window.onscroll = function showHeader() {
    var header = document.querySelector('.header')

    if (window.pageYOffset > 300) {
        header.classList.add('header-fixed');
        header.classList.remove('header-top');
    }
    else if (window.pageYOffset < 10) {
        header.classList.remove('header-fixed');
        header.classList.add('header-top');
    }
}


window.addEventListener('scroll', function () {
    var scrollDistance = window.pageYOffset;

    var list = document.querySelectorAll('.section')
    var listArray = Array.prototype.slice.call(list);
    listArray.forEach(function (el,i) {

        if (el.offsetTop - 600 - document.querySelector('.header').clientHeight <= scrollDistance) {
            var list1 = document.querySelectorAll('.link')
            var listArray1 = Array.prototype.slice.call(list1);
            listArray1.forEach(function (el) {
                if (el.classList.contains('active')) {
                    el.classList.remove('active')
                }
            });
            var list2 = document.querySelectorAll('.link-line')
            var listArray2 = Array.prototype.slice.call(list2);
            listArray2.forEach(function (el) {
                if (el.classList.contains('active-line')) {
                    el.classList.remove('active-line')
                }
            });
            // document.querySelectorAll('.nav li')[i].querySelector('a').classList.add('active');
            // document.querySelectorAll('.nav li')[i].querySelector('hr').classList.add('active-line');
            var elClass = '.link' + i;
            var elLineClass = '.line' + i;
            document.querySelector(elClass).classList.add('active');
            document.querySelector(elLineClass).classList.add('active-line');

            if (i == 0) {
                clearClass();
                document.querySelector('.image-progress').classList.add('image-progress1')
            }
            else if (i == 1) {
                clearClass();
                document.querySelector('.image-progress').classList.add('image-progress2')
            }
            else if (i == 2) {
                clearClass();
                document.querySelector('.image-progress').classList.add('image-progress3')
            }

            else if (i == 3) {
                clearClass();
                document.querySelector('.image-progress').classList.add('image-progress4')
            }
            else if (i == 4) {
                clearClass();
                document.querySelector('.image-progress').classList.add('image-progress5')
            }

            else if (i == 5) {
                clearClass();
                document.querySelector('.image-progress').classList.add('image-progress6')
            }

            else if (i == 6) {
                clearClass();
                document.querySelector('.image-progress').classList.add('image-progress7')
            }
        }
    })
})

function clearClass() {
    var el = document.querySelector('.image-progress');

    if (el.classList.contains('image-progress1')) {
        el.classList.remove('image-progress1');
        return 0;
    }

    if (el.classList.contains('image-progress2')) {
        el.classList.remove('image-progress2');
        return 0;
    }

    if (el.classList.contains('image-progress3')) {
        el.classList.remove('image-progress3');
        return 0;
    }

    if (el.classList.contains('image-progress4')) {
        el.classList.remove('image-progress4');
        return 0;
    }

    if (el.classList.contains('image-progress5')) {
        el.classList.remove('image-progress5');
        return 0;
    }

    if (el.classList.contains('image-progress6')) {
        el.classList.remove('image-progress6');
        return 0;
    }

    if (el.classList.contains('image-progress7')) {
        el.classList.remove('image-progress7');
        return 0;
    }
}

function hoverButton() {
    var list = document.querySelectorAll('#glossaryImg')
    var listArray = Array.prototype.slice.call(list);
    listArray.forEach(function (el) {
        el.src = "./image/book-icon-hover.svg"
    })
}

function hoverButtonOut() {
    var list = document.querySelectorAll('#glossaryImg')
    var listArray = Array.prototype.slice.call(list);
    listArray.forEach(function (el) {
        el.src = "./image/book-icon.svg"
    })
}

function hoverButtonModal() {
    var list = document.querySelectorAll('.btn')
    var listArray = Array.prototype.slice.call(list);
    listArray.forEach(function (el) {
        el.classList.remove('btn');
        el.classList.add('btn-active');
        var list1 = document.querySelectorAll('.btn-p-not-active')
        var listArray1 = Array.prototype.slice.call(list1);
        listArray1.forEach(function (el) {
            el.classList.remove('btn-p-not-active')
            el.classList.add('btn-p-active')
        })
    })
}

function hoverButtonModalOut() {

    var list = document.querySelectorAll('.btn-active')
    var listArray = Array.prototype.slice.call(list);
    listArray.forEach(function (el) {
        el.classList.remove('btn-active');
        el.classList.add('btn');

        var list1 = document.querySelectorAll('.btn-p-active')
        var listArray1 = Array.prototype.slice.call(list1);
        listArray1.forEach(function (el) {
            el.classList.remove('btn-p-active')
            el.classList.add('btn-p-not-active')
        })
    })
}

function showModal() {
    var page = document.querySelector('html');
    var list = document.querySelectorAll('.modal-window')
    var listArray = Array.prototype.slice.call(list);
    listArray.forEach(function (el) {
        if (el.classList.contains('modal')) {
            el.classList.remove('modal');
            el.classList.add('modal-off');
            page.classList.remove('scroll-off')

        }
        else if (el.classList.contains('modal-off')) {
            el.classList.remove('modal-off');
            el.classList.add('modal');
            page.classList.add('scroll-off')
        }
    })
}

function mapPoint(element) {
    var list = document.querySelectorAll('.list-active')
    var listArray = Array.prototype.slice.call(list);
    listArray.forEach(function (el) {
        if (el.classList.contains('list-active')) {
            el.classList.remove('list-active');
        }
    });
    element.classList.add('list-active');
    point = parseInt(element.id[4]);
    console.log(element.id[4]);
    showMapInfo(element.id);
}

function mapDot(element) {
    var list = document.querySelectorAll('.list-active')
    var listArray = Array.prototype.slice.call(list);
    listArray.forEach(function (el) {
        if (el.classList.contains('list-active')) {
            el.classList.remove('list-active');
        }
    });

    document.querySelector('.' + element.id).classList.add('list-active');
    showMapInfo(element.id);
}

function showMapInfo(id) {
    if (window.screen.width >= 520) {

        var list = document.querySelectorAll('.off')
        var listArray = Array.prototype.slice.call(list);
        listArray.forEach(function (el) {
            if (el.classList.contains('off')) {
                el.classList.remove('off');
            }
        });


        var list = document.querySelectorAll('.activ')
        var listArray = Array.prototype.slice.call(list);
        listArray.forEach(function (el) {
            if (el.classList.contains('activ')) {
                el.classList.remove('activ');
            }
        });

        var list = document.querySelectorAll('.up')
        var listArray = Array.prototype.slice.call(list);
        listArray.forEach(function (el) {
            if (el.classList.contains('up')) {
                el.classList.remove('up');
            }
        });

        var list = document.querySelectorAll('.map-p')
        var listArray = Array.prototype.slice.call(list);
        listArray.forEach(function (el) {
            if (el.classList.contains('deactive')) {
                el.classList.remove('deactive');
            }
        });

        if (id === "list1") {
            document.querySelector('.bam-img').classList.add('activ');
            document.querySelector('.bam-road').classList.add('activ');
            document.querySelector('.bam').classList.add('up');
            var list = document.querySelectorAll('.map-p')
            var listArray = Array.prototype.slice.call(list);
            listArray.forEach(function (el) {
                if (!el.classList.contains('up')) {
                    el.classList.add('off');
                }
            })
        }
        else if (id === "list2") {
            document.querySelector('.kanal-img').classList.add('activ');
            document.querySelector('.kanal-volgodon ').classList.add('up');
            var list = document.querySelectorAll('.map-p')
            var listArray = Array.prototype.slice.call(list);
            listArray.forEach(function (el) {
                if (!el.classList.contains('up')) {
                    el.classList.add('off');
                }
            })

        }
        else if (id === "list3") {
            document.querySelector('.krim-img').classList.add('activ');
            document.querySelector('.krim').classList.add('up');
            var list = document.querySelectorAll('.map-p')
            var listArray = Array.prototype.slice.call(list);
            listArray.forEach(function (el) {
                if (!el.classList.contains('up')) {
                    el.classList.add('off');
                }
            })
        }
        else if (id === "list4") {
            document.querySelector('.yamal-img').classList.add('activ');
            document.querySelector('.yamal').classList.add('up');
            var list = document.querySelectorAll('.map-p')
            var listArray = Array.prototype.slice.call(list);
            listArray.forEach(function (el) {
                if (!el.classList.contains('up')) {
                    el.classList.add('off');
                }
            })
        }
        else if (id === "list5") {
            document.querySelector('.sila-img').classList.add('activ');
            document.querySelector('.sila-road').classList.add('activ');
            document.querySelector('.sila').classList.add('up');
            var list = document.querySelectorAll('.map-p')
            var listArray = Array.prototype.slice.call(list);
            listArray.forEach(function (el) {
                if (!el.classList.contains('up')) {
                    el.classList.add('off');
                }
            })
        }
        else if (id === "list6") {
            var list = document.querySelectorAll('.map-p')
            var listArray = Array.prototype.slice.call(list);
            listArray.forEach(function (el) {
                el.classList.add('deactive');
            });
            document.querySelector('.stadion').classList.add('activ');
            // document.querySelector('.stadion-img').classList.add('activ');
            document.querySelector('.stadion-list').classList.add('activ');
        }
        else if (id === "list7") {
            document.querySelector('.m11-img').classList.add('activ');
            document.querySelector('.m11-road').classList.add('activ');
            // document.querySelector('.aero-img').classList.add('activ');
            document.querySelector('.m11').classList.add('up');
            document.querySelector('.krim').classList.add('up');
            document.querySelector('.pulkovo').classList.add('up');
            var list = document.querySelectorAll('.map-p')
            var listArray = Array.prototype.slice.call(list);
            listArray.forEach(function (el) {
                if (!el.classList.contains('up')) {
                    el.classList.add('off');
                }
            })

        }
        else if (id === "list8") {
            document.querySelector('.aero-img').classList.add('activ');
            document.querySelector('.pulkovo').classList.add('up');
            document.querySelector('.sochi').classList.add('up');
            var list = document.querySelectorAll('.map-p')
            var listArray = Array.prototype.slice.call(list);
            listArray.forEach(function (el) {
                if (!el.classList.contains('up')) {
                    el.classList.add('off');
                }
            })
        }
    }

    else if (window.screen.width <= 520) {

        var list = document.querySelectorAll('.activ')
        var listArray = Array.prototype.slice.call(list);
        listArray.forEach(function (el) {
            if (el.classList.contains('activ')) {
                el.classList.remove('activ');
            }
        });

        var list = document.querySelectorAll('.up')
        var listArray = Array.prototype.slice.call(list);
        listArray.forEach(function (el) {
            if (el.classList.contains('up')) {
                el.classList.remove('up');
            }
        });

        var list = document.querySelectorAll('.map-p')
        var listArray = Array.prototype.slice.call(list);
        listArray.forEach(function (el) {
            if (el.classList.contains('deactive')) {
                el.classList.remove('deactive');
            }
        });


        var list = document.querySelectorAll('.dot-dis')
        var listArray = Array.prototype.slice.call(list);
        listArray.forEach(function (el) {
            if (el.classList.contains('dot-dis')) {
                el.classList.remove('dot-dis');
            }
        });


        if (id === "list1") {
            if (document.querySelector('.maps').classList.contains('stadion-map')) {
                document.querySelector('.maps').classList.add('map-image')
                document.querySelector('.maps').classList.remove('stadion-map')
            }
            else {
                document.querySelector('.maps').classList.add('map-image')
            }
            clearImg();
            document.querySelector('.dot-img').classList.add('bam-img-t');
            document.querySelectorAll('.bam')[1].classList.add('big-dot');
            document.querySelector('.bam-road-t').classList.add('activ');
            document.querySelectorAll('.bam')[1].classList.add('up');
            document.querySelector('.header-map-title').innerHTML = "1.  Строительство Байкало-Амурской магистрали";

            document.querySelectorAll('.sila')[1].classList.add('dot-dis');
            document.querySelectorAll('.kanal-volgodon')[1].classList.add('dot-dis');
            document.querySelectorAll('.krim')[1].classList.add('dot-dis');
            document.querySelectorAll('.yamal')[1].classList.add('dot-dis');
            document.querySelectorAll('.pulkovo')[1].classList.add('dot-dis');
            document.querySelectorAll('.sochi')[1].classList.add('dot-dis');
            document.querySelectorAll('.m11')[1].classList.add('dot-dis');
        }
        else if (id === "list2") {
            if (document.querySelector('.maps').classList.contains('stadion-map')) {
                document.querySelector('.maps').classList.add('map-image')
                document.querySelector('.maps').classList.remove('stadion-map')
            }
            else {
                document.querySelector('.maps').classList.add('map-image')
            }
            clearImg();
            document.querySelectorAll('.kanal-volgodon')[1].classList.add('big-dot');
            document.querySelector('.dot-img').classList.add('kanal-img-t');
            document.querySelector('.header-map-title').innerHTML = "2.  Строительство Волго-Донского судоходного канала имени В.И.Ленина";

            document.querySelectorAll('.sila')[1].classList.add('dot-dis');
            document.querySelectorAll('.bam')[1].classList.add('dot-dis');
            document.querySelectorAll('.krim')[1].classList.add('dot-dis');
            document.querySelectorAll('.yamal')[1].classList.add('dot-dis');
            document.querySelectorAll('.pulkovo')[1].classList.add('dot-dis');
            document.querySelectorAll('.sochi')[1].classList.add('dot-dis');
            document.querySelectorAll('.m11')[1].classList.add('dot-dis');
        }
        else if (id === "list3") {
            if (document.querySelector('.maps').classList.contains('stadion-map')) {
                document.querySelector('.maps').classList.add('map-image')
                document.querySelector('.maps').classList.remove('stadion-map')
            }
            else {
                document.querySelector('.maps').classList.add('map-image')
            }
            clearImg();
            document.querySelector('.dot-img').classList.add('krim-img-t');
            document.querySelectorAll('.krim')[1].classList.add('big-dot');
            document.querySelector('.header-map-title').innerHTML = "3.  Строительство Крымского моста";

            document.querySelectorAll('.sila')[1].classList.add('dot-dis');
            document.querySelectorAll('.bam')[1].classList.add('dot-dis');
            document.querySelectorAll('.kanal-volgodon')[1].classList.add('dot-dis');
            document.querySelectorAll('.yamal')[1].classList.add('dot-dis');
            document.querySelectorAll('.pulkovo')[1].classList.add('dot-dis');
            document.querySelectorAll('.sochi')[1].classList.add('dot-dis');
            document.querySelectorAll('.m11')[1].classList.add('dot-dis');

        }
        else if (id === "list4") {
            if (document.querySelector('.maps').classList.contains('stadion-map')) {
                document.querySelector('.maps').classList.add('map-image')
                document.querySelector('.maps').classList.remove('stadion-map')
            }
            else {
                document.querySelector('.maps').classList.add('map-image')
            }
            clearImg();
            document.querySelector('.dot-img').classList.add('yamal-img-t');
            document.querySelectorAll('.yamal')[1].classList.add('big-dot');
            document.querySelector('.header-map-title').innerHTML = "4.  Строительства завода Ямал СПГ";

            document.querySelectorAll('.sila')[1].classList.add('dot-dis');
            document.querySelectorAll('.bam')[1].classList.add('dot-dis');
            document.querySelectorAll('.kanal-volgodon')[1].classList.add('dot-dis');
            document.querySelectorAll('.krim')[1].classList.add('dot-dis');
            document.querySelectorAll('.pulkovo')[1].classList.add('dot-dis');
            document.querySelectorAll('.sochi')[1].classList.add('dot-dis');
            document.querySelectorAll('.m11')[1].classList.add('dot-dis');
        }
        else if (id === "list5") {

            if (document.querySelector('.maps').classList.contains('stadion-map')) {
                document.querySelector('.maps').classList.add('map-image')
                document.querySelector('.maps').classList.remove('stadion-map')
            }
            else {
                document.querySelector('.maps').classList.add('map-image')
            }
            clearImg();
            document.querySelector('.dot-img').classList.add('sila-img-t');
            document.querySelector('.sila-road-t').classList.add('activ');
            document.querySelector('.bam').classList.add('up');
            document.querySelector('.header-map-title').innerHTML = "5.  Строительство магистрального трубопровода Сила Сибири";

            document.querySelectorAll('.yamal')[1].classList.add('dot-dis');
            document.querySelectorAll('.bam')[1].classList.add('dot-dis');
            document.querySelectorAll('.kanal-volgodon')[1].classList.add('dot-dis');
            document.querySelectorAll('.krim')[1].classList.add('dot-dis');
            document.querySelectorAll('.pulkovo')[1].classList.add('dot-dis');
            document.querySelectorAll('.sochi')[1].classList.add('dot-dis');
            document.querySelectorAll('.m11')[1].classList.add('dot-dis');
        }
        else if (id === "list6") {
            if (document.querySelector('.maps').classList.contains('map-image')) {
                document.querySelector('.maps').classList.remove('map-image')
                document.querySelector('.maps').classList.add('stadion-map')

            }
            else {
                document.querySelector('.maps').classList.add('stadion-map')
            }
            clearImg();
            var list = document.querySelectorAll('.map-p')
            var listArray = Array.prototype.slice.call(list);
            listArray.forEach(function (el) {
                el.classList.add('deactive');
            });
            document.querySelector('.dot-img').classList.add('stadion-t');
            document.querySelectorAll('.stadion-img')[1].classList.add('activ');
            document.querySelector('.header-map-title').innerHTML = "6. Строительство стадионов для проведения ЧМ-2018";
        }
        else if (id === "list7") {
            if (document.querySelector('.maps').classList.contains('stadion-map')) {
                document.querySelector('.stadion-map').classList.add('map-image')
                document.querySelector('.stadion-map').classList.remove('stadion-map')
            }
            else {
                document.querySelector('.maps').classList.add('map-image')
            }
            clearImg();
            document.querySelector('.m11-img-t').classList.add('activ');
            document.querySelector('.m11-road-t').classList.add('activ');
            document.querySelector('.dot-img').classList.add('m11-t');
            document.querySelector('.aero-img').classList.add('activ');
            document.querySelector('.m11').classList.add('up');
            document.querySelector('.kanal-volgodon').classList.add('up');
            document.querySelector('.krim').classList.add('up');
            document.querySelector('.sochi').classList.add('up');
            document.querySelector('.pulkovo').classList.add('up');
            document.querySelector('.header-map-title').innerHTML = "7. Строительство платных автодорог М11, М4, ЦКАД, М1, Западный скоростной диаметр, «Европа-Западный Китай»";

            document.querySelectorAll('.yamal')[1].classList.add('dot-dis');
            document.querySelectorAll('.bam')[1].classList.add('dot-dis');
            document.querySelectorAll('.kanal-volgodon')[1].classList.add('dot-dis');
            document.querySelectorAll('.sochi')[1].classList.add('dot-dis');
            document.querySelectorAll('.sila')[1].classList.add('dot-dis');

        }
        else if (id === "list8") {
            if (document.querySelector('.maps').classList.contains('stadion-map')) {
                document.querySelector('.maps').classList.add('map-image')
                document.querySelector('.maps').classList.remove('stadion-map')
            }
            else {
                document.querySelector('.maps').classList.add('map-image')
            }
            document.querySelector('.dot-img').classList.add('aero-tel');
            document.querySelectorAll('.aero-img')[1].classList.add('activ');
            document.querySelector('.m11').classList.add('up');
            document.querySelector('.kanal-volgodon').classList.add('up');
            document.querySelector('.krim').classList.add('up');
            document.querySelector('.header-map-title').innerHTML = "8.            Строительство аэропортов - Сочи к Олимпиаде 2014, Пулково";

            document.querySelectorAll('.yamal')[1].classList.add('dot-dis');
            document.querySelectorAll('.bam')[1].classList.add('dot-dis');
            document.querySelectorAll('.kanal-volgodon')[1].classList.add('dot-dis');
            document.querySelectorAll('.krim')[1].classList.add('dot-dis');
            document.querySelectorAll('.sila')[1].classList.add('dot-dis');
            document.querySelectorAll('.m11')[1].classList.add('dot-dis');
        }
    }
}

function clearImg() {

    if (document.querySelector('.dot-img').classList.contains('bam-img-t')) {
        document.querySelector('.dot-img').classList.remove('bam-img-t');
        document.querySelectorAll('.bam')[1].classList.remove('big-dot');
    }
    if (document.querySelector('.dot-img').classList.contains('kanal-img-t')) {
        document.querySelector('.dot-img').classList.remove('kanal-img-t');
        document.querySelectorAll('.kanal-volgodon')[1].classList.remove('big-dot');
    }
    if (document.querySelector('.dot-img').classList.contains('krim-img-t')) {
        document.querySelector('.dot-img').classList.remove('krim-img-t');
        document.querySelectorAll('.krim')[1].classList.remove('big-dot');
    }
    if (document.querySelector('.dot-img').classList.contains('yamal-img-t')) {
        document.querySelector('.dot-img').classList.remove('yamal-img-t');
        document.querySelectorAll('.yamal')[1].classList.remove('big-dot');
    }
    if (document.querySelector('.dot-img').classList.contains('sila-img-t')) {
        document.querySelector('.dot-img').classList.remove('sila-img-t');
        document.querySelectorAll('.sila')[1].classList.remove('big-dot');
    }
    if (document.querySelector('.dot-img').classList.contains('stadion-t')) {
        document.querySelector('.dot-img').classList.remove('stadion-t');
    }
    if (document.querySelector('.dot-img').classList.contains('m11-t')) {
        document.querySelector('.dot-img').classList.remove('m11-t');
    }
    if (document.querySelector('.dot-img').classList.contains('aero-tel')) {
        document.querySelector('.dot-img').classList.remove('aero-tel');
    }
}




function showPopApp(el) {
    if (window.screen.width >= 520) {
        switch (el.id) {
            case 'close':
                document.querySelector('.info-popapp').classList.add('info-popapp-pos');
                document.querySelector('.info-popapp').style.top = "0px";
                break;
            case 'a':
                document.querySelector('.info-popapp').style.top = el.offsetTop - 90 + "px";
                
                document.querySelector('.info-popapp').classList.remove('info-popapp-pos');
                document.querySelector('.info-popapp-title').innerHTML = "Банковских продуктов";
                document.querySelector('.info-popapp-text').innerHTML = "Банковские гарантии, кредиты и др. продукты.";
                break;
            case 'b':
                document.querySelector('.info-popapp').style.top = el.offsetTop - 90 + "px";
                document.querySelector('.info-popapp').classList.remove('info-popapp-pos');
                document.querySelector('.info-popapp-title').innerHTML = "См. Особенности структурирования проектов на основе 223-ФЗ";
                document.querySelector('.info-popapp-text').innerHTML = "";
                break;
            case 'c':
                document.querySelector('.info-popapp').style.top = el.offsetTop - 90 + "px";
                document.querySelector('.info-popapp').classList.remove('info-popapp-pos');
                document.querySelector('.info-popapp-title').innerHTML = "См. 223-ФЗ.";
                document.querySelector('.info-popapp-text').innerHTML = "";
                break;
            case 'd':
                document.querySelector('.info-popapp').style.top = el.offsetTop - 90 + "px";
                document.querySelector('.info-popapp').classList.remove('info-popapp-pos');
                document.querySelector('.info-popapp-title').innerHTML = "Cвободу";
                document.querySelector('.info-popapp-text').innerHTML = "Негативной с точки зрения защиты интересов Банка стороной указанной свободы является формальная возможность исключения из контрактной документации ответственности Заказчика за неисполнение им своих обязательств.";
                break;
            case 'e':
                document.querySelector('.info-popapp').style.top = el.offsetTop - 90 + "px";
                document.querySelector('.info-popapp').classList.remove('info-popapp-pos');
                document.querySelector('.info-popapp-title').innerHTML = "Опционально";
                document.querySelector('.info-popapp-text').innerHTML = "В случае разделения объекта автомобильной инфраструктуры на несколько проектов ГК «Автодор» привлекает отдельного оператора по сбору платы на весь объект и не включает соответствующие работы в задание Исполнителю конкретного проекта";
                break;
            case 'f':
                document.querySelector('.info-popapp').style.top = el.offsetTop - 90 + "px";
                document.querySelector('.info-popapp').classList.remove('info-popapp-pos');
                document.querySelector('.info-popapp-title').innerHTML = "Суммы инвестиционных платежей";
                document.querySelector('.info-popapp-text').innerHTML = "Сумма инвестиционных платежей всегда больше суммы предоставляемых кредитов при условии, что размер кредита Исполнителю не нарушает предусмотренную условиями ДИС структуру финансирования.";
                break;
            case 'g':
                document.querySelector('.info-popapp').style.top = el.offsetTop - 90 + "px";
                document.querySelector('.info-popapp').classList.remove('info-popapp-pos');
                document.querySelector('.info-popapp-title').innerHTML = "Соглашение о взаимодействии";
                document.querySelector('.info-popapp-text').innerHTML = "В общепринятой терминологии ГЧП трехстороннее соглашение между заказчиком (публичным партнером), исполнителем (частным партнером) и финансирующими организациями (банками) называют прямым соглашением (от английского Direct Agreement) без уточнения контрагентов или соглашением о взаимодействии. Необходимо различать такое прямое соглашение и прямое соглашение с подрядчиками (различия очевидны на рисунке).";
                break;
            case 'h':
                document.querySelector('.info-popapp').style.top = el.offsetTop - 90 + "px";
                document.querySelector('.info-popapp').classList.remove('info-popapp-pos');
                document.querySelector('.info-popapp-title').innerHTML = "Платной автодороги Москва \— Санкт-Петербург на участке 15–58 км.";
                document.querySelector('.info-popapp-text').innerHTML = "Первая в новейшей истории России концессия автомобильной дороги.";
                break;
            case 'i':
                document.querySelector('.info-popapp').style.top = el.offsetTop - 90 + "px";
                document.querySelector('.info-popapp').classList.remove('info-popapp-pos');
                document.querySelector('.info-popapp-title').innerHTML = "Конкурсные процедуры";
                document.querySelector('.info-popapp-text').innerHTML = "В деловой практике существует большое количество различных форм и процедур проведения конкурсных отборов, в том числе многоэтапные конкурсы, предусматривающие предквалификацию претендентов и т. п.";
                break;
            case 'j':
                document.querySelector('.info-popapp').style.top = el.offsetTop - 90 + "px";
                document.querySelector('.info-popapp').classList.remove('info-popapp-pos');
                document.querySelector('.info-popapp-title').innerHTML = "С победителем";
                document.querySelector('.info-popapp-text').innerHTML = "Под победителем в данном контексте понимается лицо, с которым заключают контракт. Помимо собственно победителя конкурса, им может также быть единственный участник признанного несостоявшимся конкурса, участник, сделавший лучшее после победителя предложение в случае уклонения последнего от заключения контракта и т. п.";
                break;
            case 'k':
                document.querySelector('.info-popapp').style.top = el.offsetTop - 90 + "px";
                document.querySelector('.info-popapp').classList.remove('info-popapp-pos');
                document.querySelector('.info-popapp-title').innerHTML = "По формальным основаниям";
                document.querySelector('.info-popapp-text').innerHTML = "В первую очередь речь идет об основаниях, связанных с установлением в рамках гарантии механизмов, направленных на защиту интересов Банка и ограничение произвола заказчика в отношении предъявления указаний платежа по гарантии.";
                break;
            case 'l':
                document.querySelector('.info-popapp').style.top = el.offsetTop - 90 + "px";
                document.querySelector('.info-popapp').classList.remove('info-popapp-pos');
                document.querySelector('.info-popapp-title').innerHTML = "Обсуждением";
                document.querySelector('.info-popapp-text').innerHTML = "Степень открытости таких обсуждений может варьироваться от случая к случаю: от совещаний с конкретными подрядчиками до публичных слушаний и т. п.";
                break;
            case 'm':
                document.querySelector('.info-popapp').style.top = el.offsetTop - 90 + "px";
                document.querySelector('.info-popapp').classList.remove('info-popapp-pos');
                document.querySelector('.info-popapp-title').innerHTML = "В силу требований законодательства";
                document.querySelector('.info-popapp-text').innerHTML = "Технически внесение изменений возможно, но только через процедуру изменения КД с соответствующим переносом сроков проведения конкурса. Соответственно, данный сценарий возможен, только если на это согласен Заказчик или если Заказчик получает соответствующее предписание, например, органов государственной экспертизы, о необходимости внести изменения (например, ввиду несоответствия отдельных положений КД указаниям законодательства).";
                break;
            case 'n':
                document.querySelector('.info-popapp').style.top = el.offsetTop - 90 + "px";
                document.querySelector('.info-popapp').classList.remove('info-popapp-pos');
                document.querySelector('.info-popapp-title').innerHTML = "Штрафные санкции";
                document.querySelector('.info-popapp-text').innerHTML = "Начисление которых должно осуществляться с учетом указаний законодательства (для проектов, реализуемых на основе 44-ФЗ).";
                break;
            case 'o':
                document.querySelector('.info-popapp').style.top = el.offsetTop - 90 + "px";
                document.querySelector('.info-popapp').classList.remove('info-popapp-pos');
                document.querySelector('.info-popapp-title').innerHTML = "Процедуру продления сроков";
                document.querySelector('.info-popapp-text').innerHTML = "В том числе для проектов, реализуемых на основе 44-ФЗ и 115-ФЗ, — обязанность Заказчика выполнить соответствующие корпоративные процедуры, если это требуется законодательством в целях такого продления.";
                break;
            case 'p':
                document.querySelector('.info-popapp').style.top = el.offsetTop - 90 + "px";
                document.querySelector('.info-popapp').classList.remove('info-popapp-pos');
                document.querySelector('.info-popapp-title').innerHTML = "Минимального уровня стоимости проекта";
                document.querySelector('.info-popapp-text').innerHTML = "Если применимо, речь идет о минимальном значении критерия «Стоимость исполнения контракта», до которой клиент может опускаться в ходе конкурса / аукциона, при котором предложенные Банком условия Сделки остаются в силе";
                break;
            case 'q':
                document.querySelector('.info-popapp').style.top = el.offsetTop - 90 + "px";
                document.querySelector('.info-popapp').classList.remove('info-popapp-pos');
                document.querySelector('.info-popapp-title').innerHTML = "Необоснованное увеличение объема работ";
                document.querySelector('.info-popapp-text').innerHTML = "При формировании начальной цены контракта в рамках конкурсных процедур чаще всего используются данные сводного сметного расчета из проектно-сметной документации (ПСД). Однако условиями контракта также могут быть предусмотрены обязанности исполнителя выполнить работы, непредусмотренные ПСД, что влечет увеличение реальной себестоимости исполнения контракта ";
                break;
            case 'r':
                document.querySelector('.info-popapp').style.top = el.offsetTop - 90 + "px";
                document.querySelector('.info-popapp').classList.remove('info-popapp-pos');
                document.querySelector('.info-popapp-title').innerHTML = "Минимального уровня стоимости проекта";
                document.querySelector('.info-popapp-text').innerHTML = "Если применимо, речь идет о минимальном значении критерия «Стоимость исполнения контракта», до которого клиент может опускаться в ходе конкурса/аукциона, при котором предложенные Банком условия Сделки остаются в силе.";
                break;
            case 's':
                document.querySelector('.info-popapp').style.top = el.offsetTop - 90 + "px";
                document.querySelector('.info-popapp').classList.remove('info-popapp-pos');
                document.querySelector('.info-popapp-title').innerHTML = "Минимального уровня стоимости проекта";
                document.querySelector('.info-popapp-text').innerHTML = "Технически внесение изменений возможно, но только через процедуру изменения КД с соответствующим переносом сроков проведения конкурса. Соответственно, данный сценарий возможен, только если на это согласен Заказчик или если Заказчик получает соответствующее предписание, например, органов государственной экспертизы, о необходимости внести изменения (например, ввиду несоответствия отдельных положений КД указаниям законодательства).";
                break;
            case 't':
                document.querySelector('.info-popapp').style.top = el.offsetTop - 90 + "px";
                document.querySelector('.info-popapp').classList.remove('info-popapp-pos');
                document.querySelector('.info-popapp-title').innerHTML = "Адекватных сроков";
                document.querySelector('.info-popapp-text').innerHTML = "В случае сделок на основе 44-ФЗ и 115-ФЗ указанные сроки могут быть ограничены законодательно. В случае 223-ФЗ такие сроки могут быть ограничены регламентами закупочных процедур, утверждаемых наблюдательными советами соответствующих юридических лиц.";
                break;
            case 'u':
                document.querySelector('.info-popapp').style.top = el.offsetTop - 90 + "px";
                document.querySelector('.info-popapp').classList.remove('info-popapp-pos');
                document.querySelector('.info-popapp-title').innerHTML = "Проверка Заказчика в порядке, установленном ВНД Банка, в том числе анализ нормативных правовых актов о долгосрочных программах и бюджетах Заказчика.";
                document.querySelector('.info-popapp-text').innerHTML = "В отношении проектов/контрактов на основе 44-ФЗ/223-ФЗ.";
                break;
            case 'v':
                document.querySelector('.info-popapp').style.top = el.offsetTop - 90 + "px";
                document.querySelector('.info-popapp').classList.remove('info-popapp-pos');
                document.querySelector('.info-popapp-title').innerHTML = "Экономически обоснованного уровня";
                document.querySelector('.info-popapp-text').innerHTML = "Для каждой компании может быть определено значение суммы контракта, ниже которого привлечение кредитов на основе контрактного кредитования становится нецелесообразно с точки зрения затрат на администрирование.";
                break;
            case 'w':
                document.querySelector('.info-popapp').style.top = el.offsetTop - 90 + "px";
                document.querySelector('.info-popapp').classList.remove('info-popapp-pos');
                document.querySelector('.info-popapp-title').innerHTML = "Анализ условий контракта, в первую очередь условий расчетов с Заказчиком";
                document.querySelector('.info-popapp-text').innerHTML = "Риск возникновения кассового разрыва может считаться минимальным (без учета платежеспособности Заказчика) только при условии наличия в условиях контракта обязательства Заказчика (а не права исполнителя требовать) по уплате неустойки за просрочку платежа и четко установленных сроков платежа со стороны Заказчика за выполненные работы.";
                break;
            case 'x':
                document.querySelector('.info-popapp').style.top = el.offsetTop - 90 + "px";
                document.querySelector('.info-popapp').classList.remove('info-popapp-pos');
                document.querySelector('.info-popapp-title').innerHTML = "";
                document.querySelector('.info-popapp-text').innerHTML = "В рамках контрактов, заключаемых на основе 44-ФЗ, существует практика закрепления условий авансирования в отдельных дополнительных соглашениях к основному контракту по типовой форме. При этом достаточно часто в типовой форме присутствует указание о предоставлении отдельных гарантий возврата аванса. 44-ФЗ допускает предоставление аванса в пределах общего обеспечения исполнения контракта, в связи с чем необходимо рекомендовать клиенту внести соответствующие изменения в типовую форму, дающие возможность получения аванса в пределах общего обеспечения по контракту без предоставления дополнительных банковских гарантий возврата аванса.";
                break;
            case 'y':
                document.querySelector('.info-popapp').style.top = el.offsetTop - 90 + "px";
                document.querySelector('.info-popapp').classList.remove('info-popapp-pos');
                document.querySelector('.info-popapp-title').innerHTML = "Анализ действующей контрактной базы Подрядчика";
                document.querySelector('.info-popapp-text').innerHTML = "При построении финансовой модели на основе контрактной базы подрядчика не допускается делать предположения о заключении в будущем новых контрактов, информация о которых в настоящее время отсутствует: все расчеты должны опираться только на актуальные данные, даже если заключение контрактов с отдельными заказчиками в прошлом являлось повторяющимся событием.";
                break;
            case 'z':
                document.querySelector('.info-popapp').style.top = el.offsetTop - 90 + "px";
                document.querySelector('.info-popapp').classList.remove('info-popapp-pos');
                document.querySelector('.info-popapp-title').innerHTML = "В максимальной степени ограниченными";
                document.querySelector('.info-popapp-text').innerHTML = "С учетом требований законодательства к обеспечению по контрактам.";
                break;

        }
    }

    if (window.screen.width <= 520) {
        switch (el.id) {
            case 'close':
                document.querySelector('.info-popapp').classList.add('info-popapp-pos');
                document.querySelector('.info-popapp').style.top = "0px";
                document.querySelector('.info-popapp').style.top = "0px";
                document.querySelector('html').classList.remove('scroll-off');
                break;
            case 'a':
                document.querySelector('.info-popapp').style.top = window.scrollY + 68 + "px";
                document.querySelector('.info-popapp').classList.remove('info-popapp-pos');
                document.querySelector('.info-popapp-title').innerHTML = "Банковских продуктов";
                document.querySelector('.info-popapp-text').innerHTML = "Банковские гарантии, кредиты и др. продукты.";
                document.querySelector('html').classList.add('scroll-off');
                break;
            case 'b':
                document.querySelector('.info-popapp').style.top = window.scrollY + 68 + "px";
                document.querySelector('.info-popapp').classList.remove('info-popapp-pos');
                document.querySelector('.info-popapp-title').innerHTML = "См. 223-ФЗ.";
                document.querySelector('.info-popapp-text').innerHTML = "";
                document.querySelector('html').classList.add('scroll-off');
                break;
            case 'c':
                document.querySelector('.info-popapp').style.top = window.scrollY + 68 + "px";
                document.querySelector('.info-popapp').classList.remove('info-popapp-pos');
                document.querySelector('.info-popapp-title').innerHTML = "См. 223-ФЗ.";
                document.querySelector('.info-popapp-text').innerHTML = "";
                document.querySelector('html').classList.add('scroll-off');
                break;
            case 'd':
                document.querySelector('.info-popapp').style.top = window.scrollY + 68 + "px";
                document.querySelector('.info-popapp').classList.remove('info-popapp-pos');
                document.querySelector('.info-popapp-title').innerHTML = "Cвободу";
                document.querySelector('.info-popapp-text').innerHTML = "Негативной с точки зрения защиты интересов Банка стороной указанной свободы является формальная возможность исключения из контрактной документации ответственности Заказчика за неисполнение им своих обязательств.";
                document.querySelector('html').classList.add('scroll-off');
                break;
            case 'e':
                document.querySelector('.info-popapp').style.top = window.scrollY + 68 + "px";
                document.querySelector('.info-popapp').classList.remove('info-popapp-pos');
                document.querySelector('.info-popapp-title').innerHTML = "Опционально";
                document.querySelector('.info-popapp-text').innerHTML = "В случае разделения объекта автомобильной инфраструктуры на несколько проектов ГК «Автодор» привлекает отдельного оператора по сбору платы на весь объект и не включает соответствующие работы в задание Исполнителю конкретного проекта";
                document.querySelector('html').classList.add('scroll-off');
                break;
            case 'f':
                document.querySelector('.info-popapp').style.top = window.scrollY + 68 + "px";
                document.querySelector('.info-popapp').classList.remove('info-popapp-pos');
                document.querySelector('.info-popapp-title').innerHTML = "Суммы инвестиционных платежей";
                document.querySelector('.info-popapp-text').innerHTML = "Сумма инвестиционных платежей всегда больше суммы предоставляемых кредитов при условии, что размер кредита Исполнителю не нарушает предусмотренную условиями ДИС структуру финансирования.";
                document.querySelector('html').classList.add('scroll-off');
                break;
            case 'g':
                document.querySelector('.info-popapp').style.top = window.scrollY + 68 + "px";
                document.querySelector('.info-popapp').classList.remove('info-popapp-pos');
                document.querySelector('.info-popapp-title').innerHTML = "Соглашение о взаимодействии";
                document.querySelector('.info-popapp-text').innerHTML = "В общепринятой терминологии ГЧП трехстороннее соглашение между заказчиком (публичным партнером), исполнителем (частным партнером) и финансирующими организациями (банками) называют прямым соглашением (от английского Direct Agreement) без уточнения контрагентов или соглашением о взаимодействии. Необходимо различать такое прямое соглашение и прямое соглашение с подрядчиками (различия очевидны на рисунке).";
                document.querySelector('html').classList.add('scroll-off');
                break;

            case 'h':
                document.querySelector('.info-popapp').style.top = window.scrollY + 68 + "px";
                document.querySelector('.info-popapp').classList.remove('info-popapp-pos');
                document.querySelector('.info-popapp-title').innerHTML = "Платной автодороги Москва \— Санкт-Петербург на участке 15–58 км.";
                document.querySelector('.info-popapp-text').innerHTML = "Первая в новейшей истории России концессия автомобильной дороги.";
                document.querySelector('html').classList.add('scroll-off');
                break;

            case 'i':
                document.querySelector('.info-popapp').style.top = window.scrollY + 68 + "px";
                document.querySelector('.info-popapp').classList.remove('info-popapp-pos');
                document.querySelector('.info-popapp-title').innerHTML = "Конкурсные процедуры";
                document.querySelector('.info-popapp-text').innerHTML = "В деловой практике существует большое количество различных форм и процедур проведения конкурсных отборов, в том числе многоэтапные конкурсы, предусматривающие предквалификацию претендентов и т. п.";
                document.querySelector('html').classList.add('scroll-off');
                break;
            case 'j':
                document.querySelector('.info-popapp').style.top = window.scrollY + 68 + "px";
                document.querySelector('.info-popapp').classList.remove('info-popapp-pos');
                document.querySelector('.info-popapp-title').innerHTML = "С победителем";
                document.querySelector('.info-popapp-text').innerHTML = "Под победителем в данном контексте понимается лицо, с которым заключают контракт. Помимо собственно победителя конкурса, им может также быть единственный участник признанного несостоявшимся конкурса, участник, сделавший лучшее после победителя предложение в случае уклонения последнего от заключения контракта и т. п.";
                document.querySelector('html').classList.add('scroll-off');
                break;
            case 'k':
                document.querySelector('.info-popapp').style.top = window.scrollY + 68 + "px";
                document.querySelector('.info-popapp').classList.remove('info-popapp-pos');
                document.querySelector('.info-popapp-title').innerHTML = "По формальным основаниям";
                document.querySelector('.info-popapp-text').innerHTML = "В первую очередь речь идет об основаниях, связанных с установлением в рамках гарантии механизмов, направленных на защиту интересов Банка и ограничение произвола заказчика в отношении предъявления указаний платежа по гарантии.";
                document.querySelector('html').classList.add('scroll-off');
                break;
            case 'l':
                document.querySelector('.info-popapp').style.top = window.scrollY + 68 + "px";
                document.querySelector('.info-popapp').classList.remove('info-popapp-pos');
                document.querySelector('.info-popapp-title').innerHTML = "Обсуждением";
                document.querySelector('.info-popapp-text').innerHTML = "Степень открытости таких обсуждений может варьироваться от случая к случаю: от совещаний с конкретными подрядчиками до публичных слушаний и т. п.";
                document.querySelector('html').classList.add('scroll-off');
                break;
            case 'm':
                document.querySelector('.info-popapp').style.top = window.scrollY + 68 + "px";
                document.querySelector('.info-popapp').classList.remove('info-popapp-pos');
                document.querySelector('.info-popapp-title').innerHTML = "В силу требований законодательства";
                document.querySelector('.info-popapp-text').innerHTML = "Технически внесение изменений возможно, но только через процедуру изменения КД с соответствующим переносом сроков проведения конкурса. Соответственно, данный сценарий возможен, только если на это согласен Заказчик или если Заказчик получает соответствующее предписание, например, органов государственной экспертизы, о необходимости внести изменения (например, ввиду несоответствия отдельных положений КД указаниям законодательства).";
                document.querySelector('html').classList.add('scroll-off');
                break;
            case 'n':
                document.querySelector('.info-popapp').style.top = window.scrollY + 68 + "px";
                document.querySelector('.info-popapp').classList.remove('info-popapp-pos');
                document.querySelector('.info-popapp-title').innerHTML = "Штрафные санкции";
                document.querySelector('.info-popapp-text').innerHTML = "Начисление которых должно осуществляться с учетом указаний законодательства (для проектов, реализуемых на основе 44-ФЗ).";
                break;
            case 'o':
                document.querySelector('.info-popapp').style.top = window.scrollY + 68 + "px";
                document.querySelector('.info-popapp').classList.remove('info-popapp-pos');
                document.querySelector('.info-popapp-title').innerHTML = "Процедуру продления сроков";
                document.querySelector('.info-popapp-text').innerHTML = "В том числе для проектов, реализуемых на основе 44-ФЗ и 115-ФЗ, — обязанность Заказчика выполнить соответствующие корпоративные процедуры, если это требуется законодательством в целях такого продления.";
                document.querySelector('html').classList.add('scroll-off');
                break;
            case 'p':
                document.querySelector('.info-popapp').style.top = window.scrollY + 68 + "px";
                document.querySelector('.info-popapp').classList.remove('info-popapp-pos');
                document.querySelector('.info-popapp-title').innerHTML = "Минимального уровня стоимости проекта";
                document.querySelector('.info-popapp-text').innerHTML = "Если применимо, речь идет о минимальном значении критерия «Стоимость исполнения контракта», до которой клиент может опускаться в ходе конкурса / аукциона, при котором предложенные Банком условия Сделки остаются в силе";
                document.querySelector('html').classList.add('scroll-off');
                break;
            case 'q':
                document.querySelector('.info-popapp').style.top = window.scrollY + 68 + "px";
                document.querySelector('.info-popapp').classList.remove('info-popapp-pos');
                document.querySelector('.info-popapp-title').innerHTML = "Необоснованное увеличение объема работ";
                document.querySelector('.info-popapp-text').innerHTML = "При формировании начальной цены контракта в рамках конкурсных процедур чаще всего используются данные сводного сметного расчета из проектно-сметной документации (ПСД). Однако условиями контракта также могут быть предусмотрены обязанности исполнителя выполнить работы, непредусмотренные ПСД, что влечет увеличение реальной себестоимости исполнения контракта ";
                document.querySelector('html').classList.add('scroll-off');
                break;
            case 'r':
                document.querySelector('.info-popapp').style.top = window.scrollY + 68 + "px";
                document.querySelector('.info-popapp').classList.remove('info-popapp-pos');
                document.querySelector('.info-popapp-title').innerHTML = "Минимального уровня стоимости проекта";
                document.querySelector('.info-popapp-text').innerHTML = "Если применимо, речь идет о минимальном значении критерия «Стоимость исполнения контракта», до которого клиент может опускаться в ходе конкурса/аукциона, при котором предложенные Банком условия Сделки остаются в силе.";
                document.querySelector('html').classList.add('scroll-off');
                break;
            case 's':
                document.querySelector('.info-popapp').style.top = window.scrollY + 68 + "px";
                document.querySelector('.info-popapp').classList.remove('info-popapp-pos');
                document.querySelector('.info-popapp-title').innerHTML = "Минимального уровня стоимости проекта";
                document.querySelector('.info-popapp-text').innerHTML = "Технически внесение изменений возможно, но только через процедуру изменения КД с соответствующим переносом сроков проведения конкурса. Соответственно, данный сценарий возможен, только если на это согласен Заказчик или если Заказчик получает соответствующее предписание, например, органов государственной экспертизы, о необходимости внести изменения (например, ввиду несоответствия отдельных положений КД указаниям законодательства).";
                document.querySelector('html').classList.add('scroll-off');
                break;
            case 't':
                document.querySelector('.info-popapp').style.top = window.scrollY + 68 + "px";
                document.querySelector('.info-popapp').classList.remove('info-popapp-pos');
                document.querySelector('.info-popapp-title').innerHTML = "Адекватных сроков";
                document.querySelector('.info-popapp-text').innerHTML = "В случае сделок на основе 44-ФЗ и 115-ФЗ указанные сроки могут быть ограничены законодательно. В случае 223-ФЗ такие сроки могут быть ограничены регламентами закупочных процедур, утверждаемых наблюдательными советами соответствующих юридических лиц.";
                document.querySelector('html').classList.add('scroll-off');
                break;
            case 'u':
                document.querySelector('.info-popapp').style.top = window.scrollY + 68 + "px";
                document.querySelector('.info-popapp').classList.remove('info-popapp-pos');
                document.querySelector('.info-popapp-title').innerHTML = "Проверка Заказчика в порядке, установленном ВНД Банка, в том числе анализ нормативных правовых актов о долгосрочных программах и бюджетах Заказчика.";
                document.querySelector('.info-popapp-text').innerHTML = "В отношении проектов/контрактов на основе 44-ФЗ/223-ФЗ.";
                document.querySelector('html').classList.add('scroll-off');
                break;
            case 'v':
                document.querySelector('.info-popapp').style.top = window.scrollY + 68 + "px";
                document.querySelector('.info-popapp').classList.remove('info-popapp-pos');
                document.querySelector('.info-popapp-title').innerHTML = "Экономически обоснованного уровня";
                document.querySelector('.info-popapp-text').innerHTML = "Для каждой компании может быть определено значение суммы контракта, ниже которого привлечение кредитов на основе контрактного кредитования становится нецелесообразно с точки зрения затрат на администрирование.";
                document.querySelector('html').classList.add('scroll-off');
                break;
            case 'w':
                document.querySelector('.info-popapp').style.top = window.scrollY + 68 + "px";
                document.querySelector('.info-popapp').classList.remove('info-popapp-pos');
                document.querySelector('.info-popapp-title').innerHTML = "Анализ условий контракта, в первую очередь условий расчетов с Заказчиком";
                document.querySelector('.info-popapp-text').innerHTML = "Риск возникновения кассового разрыва может считаться минимальным (без учета платежеспособности Заказчика) только при условии наличия в условиях контракта обязательства Заказчика (а не права исполнителя требовать) по уплате неустойки за просрочку платежа и четко установленных сроков платежа со стороны Заказчика за выполненные работы.";
                document.querySelector('html').classList.add('scroll-off');
                break;
            case 'x':
                document.querySelector('.info-popapp').style.top = window.scrollY + 68 + "px";
                document.querySelector('.info-popapp').classList.remove('info-popapp-pos');
                document.querySelector('.info-popapp-title').innerHTML = "";
                document.querySelector('.info-popapp-text').innerHTML = "В рамках контрактов, заключаемых на основе 44-ФЗ, существует практика закрепления условий авансирования в отдельных дополнительных соглашениях к основному контракту по типовой форме. При этом достаточно часто в типовой форме присутствует указание о предоставлении отдельных гарантий возврата аванса. 44-ФЗ допускает предоставление аванса в пределах общего обеспечения исполнения контракта, в связи с чем необходимо рекомендовать клиенту внести соответствующие изменения в типовую форму, дающие возможность получения аванса в пределах общего обеспечения по контракту без предоставления дополнительных банковских гарантий возврата аванса.";
                document.querySelector('html').classList.add('scroll-off');
                break;
            case 'y':
                document.querySelector('.info-popapp').style.top = window.scrollY + 68 + "px";
                document.querySelector('.info-popapp').classList.remove('info-popapp-pos');
                document.querySelector('.info-popapp-title').innerHTML = "Анализ действующей контрактной базы Подрядчика";
                document.querySelector('.info-popapp-text').innerHTML = "При построении финансовой модели на основе контрактной базы подрядчика не допускается делать предположения о заключении в будущем новых контрактов, информация о которых в настоящее время отсутствует: все расчеты должны опираться только на актуальные данные, даже если заключение контрактов с отдельными заказчиками в прошлом являлось повторяющимся событием.";
                document.querySelector('html').classList.add('scroll-off');
                break;
            case 'z':
                document.querySelector('.info-popapp').style.top = window.scrollY + 68 + "px";
                document.querySelector('.info-popapp').classList.remove('info-popapp-pos');
                document.querySelector('.info-popapp-title').innerHTML = "В максимальной степени ограниченными";
                document.querySelector('.info-popapp-text').innerHTML = "С учетом требований законодательства к обеспечению по контрактам.";
                document.querySelector('html').classList.add('scroll-off');
                break;

        }

    }
}


function openNav() {
    document.querySelector('.nav-border').classList.toggle('nav-border-dis')
}

function closeNav() {
    document.querySelector('.nav-border').classList.toggle('nav-border-dis')
}

function openContent(el) {
    var id = el.id;
    if (id === "fz-44") {
        document.querySelector('#fz-44-content').classList.toggle("tab-content-open")
        document.querySelector(' #fz-44-button').classList.toggle("tab-img-close")
    }
    else if (id === "fz-223") {
        document.querySelector('#fz-223-content').classList.toggle("tab-content-open")
        document.querySelector(' #fz-223-button').classList.toggle("tab-img-close")
    }
    else if (id === "fz-115") {
        document.querySelector('#fz-115-content').classList.toggle("tab-content-open")
        document.querySelector(' #fz-115-button').classList.toggle("tab-img-close")
    }
    else if (id === "factor1") {
        document.querySelector('#factor1-content').classList.toggle("tab-content-open")
        document.querySelector(' #factor1-button').classList.toggle("tab-img-close")
    }
    else if (id === "factor2") {
        document.querySelector('#factor2-content').classList.toggle("tab-content-open")
        document.querySelector(' #factor2-button').classList.toggle("tab-img-close")
    }
    else if (id === "factor3") {
        document.querySelector('#factor3-content').classList.toggle("tab-content-open")
        document.querySelector(' #factor3-button').classList.toggle("tab-img-close")
    }
    else if (id === "factor4") {
        document.querySelector('#factor4-content').classList.toggle("tab-content-open")
        document.querySelector(' #factor4-button').classList.toggle("tab-img-close")
    }
}



function left() {
    console.log(point);
    if (point === 0 || point === 1) {
        return 0;
    }
    else if (point > 1) {
        point = point - 1;
        mapPointActive("list" + point);
        showMapInfo("list" + point)
    }
}

function right() {
    console.log(point);
    if (point === 8) {
        return 0;
    }
    else if (point < 8) {
        point = point + 1;
        mapPointActive("list" + point);
        showMapInfo("list" + point)
    }
}

function mapPointActive(cls) {

    var list = document.querySelectorAll('.list-active')
    var listArray = Array.prototype.slice.call(list);
    listArray.forEach(function (el) {
        if (el.classList.contains('list-active')) {
            el.classList.remove('list-active');
        }
    });
    var list = document.querySelectorAll('.map-l')

    forEach(function (el) {
        if (el.classList.contains(cls)) {
            el.classList.add('list-active');
        }
    });
}