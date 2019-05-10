jQuery(document).ready(function ($) {
    $('#main-loader').fadeOut('fast',function(){
        $(this).remove();
    });

    // click body remove all
    $('body').click(function (e) {
        e.stopPropagation();
        $('#account-menu').slideUp('fast');
    })

    // function main tab click
    let $mainTabList = $('.main-tab .list'),
        $wrapBoard = $('.wrap-board');
    $mainTabList.eq(0).addClass('active');
    $wrapBoard.eq(0).show();
    $mainTabList.click(function (e) {
        e.stopPropagation();
        $wrapBoard.hide();
        $mainTabList.removeClass('active');
        $(this).addClass('active');
        let dataTabList = $(this).data().board;
        dataTabList === 'quote' ? $('.footer, .secound-col').hide() : $('.footer, .secound-col').show();
        $wrapBoard.each(function (i, el) {
            if ($(el).data().board === dataTabList) {
                $(el).show();
                return false;
            }
        });
    });
    // account
    $('#account').click(function (e) {
        e.stopPropagation();
        $('#account-menu').slideToggle('fast');
    })
    //mini tab
    let $minitab = $('.mini-tab'),
        $minitabList = $minitab.children('li'),
        $wrapTableMini = $('.wrap-table-mini');
        $wrapTableMini.hide().eq(0).show();
    $minitabList.click(function (e) {
        e.preventDefault();
        e.stopPropagation();
        let dataMiniTab = $(this).data().listminitab;
        $minitabList.removeClass('active');
        $(this).addClass('active');

        $wrapTableMini.hide();
        $wrapTableMini.each(function (index, el) {
            if (dataMiniTab === $(el).data().wraptablemini) {
                $(el).show();
                return false;
            }
        });
    });

    // input-symblo
    $('.table-big').on("focus", ".input-symblo", function (e) {
        $(this).keyup(function (e) {
            e.stopPropagation()
            if (e.keyCode === 13 || e.keyCode === 27) {
                $(this).blur();
            }
        });
    });

    // ticker
    let $miniOptionType = $('.mini-option-type'),
        $miniOptionList = $('.mini-option-header >li');
    $miniOptionType.hide().eq(0).show();
    $miniOptionList.click(function (e) {
        e.stopPropagation();
        $miniOptionList.removeClass('active');
        $(this).addClass('active');
        $miniOptionType.hide();
        let miniOptionToOpen = $(this).data().miniOption;
        $miniOptionType.each(function (index, el) {
            e.stopPropagation();
            if ($(el).data().miniOption === miniOptionToOpen) {
                $(el).show();
                return false;
            }
        })
    })
    // function plus or minus input number
    $('.wrap-inputNumber .calnum').click(function (e) {
        e.stopPropagation();
        let $inputNum = $(this).closest('.wrap-inputNumber').children('input[type="number"]'),
            calNum = $inputNum.val(),
            setInputNumber = function (num) {
                $inputNum.val(num);
            },
            calNumLogic = $(this).data().calnum === 'plus' ? true : false;
        if (calNum !== '') {
            calNumLogic ? setInputNumber(++calNum) : setInputNumber(--calNum);
        } else {
            calNumLogic ? setInputNumber(1) : setInputNumber(-1);
        }
    });
    // option-symblo
    let $optionSymblo = $('.option-symblo');
    $optionSymblo.focus(function (e) {
        e.stopPropagation();
        $(this).next().show();
    });

    // list for option-symblo
    $('.option-symblo-list li').click(function (e) {
        e.stopPropagation();
        $optionSymblo.val($(this).attr('value'));
        $('.option-symblo-list').hide();

    });

    // CheckBox Sell or Buy
    $('.checkboxOption').click(function (e) {
        e.stopPropagation();
        let bgMainForm = $(this).attr('id') === 'buy' ? 'bg-blue' : 'bg-purple';
        let text = $(this).next('label').text();
        console.log(text);
        $('.main-form').removeClass('bg-gray bg-blue bg-purple').addClass(bgMainForm);
        $('.btn-submit').text(text);
        $('.btn-submit').removeClass('bg-blue bg-purple').addClass(bgMainForm);
        $('.wrap-model-order .buy').text(text);

    });
    // btn-cound 
    $('#btn-cound').click(function (e) {
        e.stopPropagation();
        $('.main-form').toggleClass('open').promise().done(function(){
            $('.wrap-form-secound').toggleClass('start');
             $('.component-cond').toggle();
        });
      
        
    });


    let $wrapModel = $('.wrap-model'),
        $boxModel = $('.box-model');
    // open wrap Model
    $('.open-model').click(function (e) {
        e.stopPropagation();
        let dataModel = $(this).data().model;
        $wrapModel.each(function (i, el) {
            if ($(el).data().wrapmodel === dataModel) {
                $(el).addClass('active');
                return false;
            }
        });
    });
    // stop event when user click box-model
    $boxModel.click(function (e) {
        e.stopPropagation();
    })
    // close wrap Model
    $('.close-model').click(function (e) {
        e.stopPropagation();
        if ($(this).parents('.wrap-model').data().wrapmodel === 'deleteOrder') {
            removeListDelete();
        }
        $(this).parents('.wrap-model').removeClass('active');
    });
    $wrapModel.click(function (e) {
        e.stopPropagation();
        let answer = confirm("ยกเลิกการทำรายการ");
        if (answer) {
            if ($(this).data().wrapmodel === 'deleteOrder') {
                removeListDelete();
            }
            $(this).removeClass('active');
        } else {
            return false;
        }
    });
    // function for set Input Range size
    let setInputRange = function (el) {
        var val = (el.val() - el.attr('min')) / el.attr('max') - el.attr('min');

        el.css('background-image',
            '-webkit-gradient(linear, left top, right top, ' +
            'color-stop(' + val + ', #70b420), ' +
            'color-stop(' + val + ', #c04251)' +
            ')'
        );
        el.closest('.wrap-input-range').children('.buy').children('span').text(el.val());
        el.closest('.wrap-input-range').children('.sell').children('span').text(100 - el.val());
    }

    // set Input Range First
    $('.input-range').each(function (i, el) {
        setInputRange($(el));
    });
    // set Input Range When User Use
    $('.input-range').on("change mousemove", function () {
        setInputRange($(this));
    });


    // Table mini Order function and Event

    let $tableMiniOrder = {
        table: $('.table-mini[data-tablemini="order"]'),
        save: $('.table-mini-order-save-volume'),
        edit: $('.table-mini-order-edit-volume'),
        close: $('.table-mini-order-close-volume'),
        delete: $('.table-mini-order-delete-column')
    }




    // function Save ,Close ,Delect for mini-tab--order
    function funcTableMiniOrder(el, option) {
        // arguments length should be 2 and option should be save,edit,close
        // Stop function if arguments and option not right
        let regex = /(save|close|edit)/g;
        if (arguments.length !== 2 || !regex.test(option)) {
            console.error('this function have 2 arguments only ($(element),"option") or this not a option(save, close, edit');
            return false;
        }
        // argument and option pass
        let $thisParent = $(el).parents('tr');
        // Delect
        if (option === 'delete') {
            $thisParent.remove();
            return false;
        }
        // Save, Close, Edit
        let $inputVolume = $thisParent.find('.input-volume-order'),
            $inputPrice = $thisParent.find('.input-price-order'),
            $pVolume = $thisParent.find('.table-mini-order-volume'),
            $pPrice = $thisParent.find('.table-mini-order-price'),
            $Confirm = $thisParent.find('.table-mini-order--td9'),
            $tableOrderCheck = $thisParent.find('.table-mini-order-check'),
            inputVolumeVal = $inputVolume.val(),
            inputPriceVal = $inputPrice.val();

        if (option === 'save' || option === 'close') {
            if (option === 'save') {
                $pVolume.text(inputVolumeVal);
                $pPrice.text(inputPriceVal);
            }
            $Confirm.removeClass('active');
            $tableOrderCheck.prop("checked", false);
            $pVolume.show();
            $inputVolume.remove();
            $pPrice.show();
            $inputPrice.remove();
        } else if (option === 'edit') {
            let checkLength = $thisParent.find('.table-mini-order--td6').children().length,
                checkLength2 = $thisParent.find('.table-mini-order--td7').children().length;
            if (checkLength > 1 || checkLength2 > 1) {
                return false;
            }
            $tableOrderCheck.prop("checked", true);
            $Confirm.addClass('active');
            let pVolume = $pVolume.text(),
                renderInput = '<input class="input-volume-order" type="number" name="table-mini-order-volume" value="" />';


            $pVolume.after(renderInput).next('input').val(pVolume).focus().prev().hide();

            let pPrice = $pPrice.text(),
                renderInput2 = '<input class="input-price-order" type="text" name="table-mini-order-price" value="" />';
            $pPrice.after(renderInput2).next('input').val(pPrice).prev().hide();

        }
    }
    // Save table-mini-order by enter key
    $tableMiniOrder.table.on("focus", ".input-volume-order,.input-price-order", function () {
        $(this).keyup(function (e) {
            e.stopPropagation()
            if (e.keyCode === 13) {
                funcTableMiniOrder($(this), 'save');
            } else if (e.keyCode === 27) {
                funcTableMiniOrder($(this), 'close');
            }
        });
    });

    // Save table-mini-order by click button 
    $tableMiniOrder.save.click(function (e) {
        e.stopPropagation();
        funcTableMiniOrder(this, 'save');
    });

    // Edit for table-mini-order
    $tableMiniOrder.edit.click(function (e) {
        e.stopPropagation();
        funcTableMiniOrder(this, 'edit');
    });

    // function Close for mini tab
    $tableMiniOrder.close.click(function (e) {
        e.stopPropagation();
        funcTableMiniOrder(this, 'close');
    });

    // function Delete column
    $tableMiniOrder.delete.click(function (e) {
        e.stopPropagation();
        DeleteOneMiniTab($(this));
    });


    //function Delete one column minitab
    function DeleteOneMiniTab($this) {
        let $listDelete = $this.closest('tr');

        $('.wrap-model-deleteOrder').addClass('active');

        $('#deleteOrder-count').append(`Confirn to cancel the following ${$listDelete.length} order(s)`);

        let $el = $($listDelete),
            orderNum = $el.children('.table-mini-order--td2').text(),
            orderNvdr = $el.find('.table-mini-order-nvdr').prop('checked') ? '<input 44 type="checkbox" checked>' : '<input 55 type="checkbox">',
            orderSymbol = $el.children('.table-mini-order--td4').text(),
            orderSide = $el.children('.table-mini-order--td3').text(),
            orderPrice = $el.children('.table-mini-order--td7').text(),
            orderVolumn = $el.find('.table-mini-order-volume').text(),
            orderStatus = $el.children('.table-mini-order--td11').text();
        $el.find('.table-mini-order-check').prop('checked', false);
        let renderListDelete = `<tr>
                                    <td>${orderNum}</td>
                                    <td>${orderNvdr}</td>
                                    <td>${orderSymbol}</td>
                                    <td>${orderSide}</td>
                                    <td>${orderPrice}</td>
                                    <td>${orderVolumn}</td>
                                    <td>${orderStatus}</td>
                                    </tr>
                                    `
        $('.table-model-deleteOrder tbody').append(renderListDelete);

    }
    // function Delete column more then 1
    $('#btn-cancel-tabmini-order').click(function (e) {
        e.stopPropagation();
        let $listDelete = $('.wrap-table-mini-order')
            .find('.table-mini-order-check:checked')
            .closest('tr');
        $('.wrap-model-deleteOrder').addClass('active');
        $('#deleteOrder-count').append(`Confirn to cancel the following ${$listDelete.length} order(s)`);
        $listDelete.each(function (index, el) {

            let $el = $(el),
                orderNum = $el.children('.table-mini-order--td2').text(),
                orderNvdr = $el.find('.table-mini-order-nvdr').prop('checked') ? '<input type="checkbox" checked>' : '<input type="checkbox">',
                orderSymbol = $el.children('.table-mini-order--td4').text(),
                orderSide = $el.children('.table-mini-order--td3').text(),
                orderPrice = $el.children('.table-mini-order--td7').text(),
                orderVolumn = $el.find('.table-mini-order-volume').text(),
                orderStatus = $el.children('.table-mini-order--td11').text();
            $el.find('.table-mini-order-check').prop('checked', false);
            let renderListDelete = `<tr>
                                    <td>${orderNum}</td>
                                    <td>${orderNvdr}</td>
                                    <td>${orderSymbol}</td>
                                    <td>${orderSide}</td>
                                    <td>${orderPrice}</td>
                                    <td>${orderVolumn}</td>
                                    <td>${orderStatus}</td>
                                    </tr>
                                    `
            $('.table-model-deleteOrder tbody').append(renderListDelete);
        });


    });
    // function Remove list Delete when model Close
    function removeListDelete() {
        $('.table-model-deleteOrder tbody tr').remove();
        $('#deleteOrder-count').text('');
        $('#pinCode').val('');
    }




    // dataType
    let $dataType = $('.dataType');
    $dataType.hide().eq(0).show();
    $('.icon-dataType').click(function (e) {
        e.stopPropagation();
        let typeForShow = $(this).data().type;
        $dataType.hide();
        $dataType.each(function (index, el) {
            if ($(el).data().type === typeForShow) {
                $(el).show();
                return false;
            };
        });
    })

    // Clock date and Time
    function setClock() {
        let d = new Date(),
            dH = d.getHours(),
            dM = d.getMinutes(),
            dS = d.getSeconds(),
            time = `${dH}:${dM}:${dS}`;
        $('#headerTime').text(time);
    }

    function setDate() {
        const nameDay = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            month_names_short = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        let d = new Date(),
            date = `${nameDay[d.getDay()]} 
                ${month_names_short[d.getMonth()]} 
                ${d.getDate()} ${d.getFullYear()}`;
        $('#headerDate').text(date);
    }
    setClock();
    setDate();

    // run setClock() every 1 secound
    setInterval(function () {
        setClock();
    }, 1000);


});