
                function inputimage() {
            $('<img id="imgNoteShare" class="img_share" title="选中内容分享到笔记" src="images/huaci.png"  />').appendTo('body');
            $('<img id="imgNewsSearch" class="img_search" title="选中内容搜索" src="images/sousuo.png" />').appendTo('body');
            }
    //图片导入方法
    inputimage();

    //一些样式
    $('.img_share').css({
        display: 'none',
        position: 'absolute',
        cursor: 'pointer'
    });
    $('.img_search').css({
        display: 'none',
        position: 'absolute',
        cursor: 'pointer'
    });

    //对文件进行选中
    var funGetSelectTxt = function () {
        var txt = '';
        if (document.selection) {
            txt = document.selection.createRange().text;
        } else {
            txt = document.getSelection();
        }
        return txt.toString();
    };

    //显示图片
    $('html,body').mouseup(function (e) {
        if (e.target.id == 'imgNoteShare' || e.target.id == 'imgNewsSearch') {
            return
        }
        e = e || window.event;
        var txt = funGetSelectTxt(),
            sh = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
            left = (e.clientX - 40 < 0) ? e.clientX + 20 : e.clientX - 40,
            top = (e.clientY - 40 < 0) ? e.clientY + sh + 20 : e.clientY + sh - 40;
        if (txt) {
            $('#imgNoteShare').css({
                display: 'inline',
                left: left,
                top: top + 50,
            });
            $("#imgNewsSearch").css({
                display : 'inline',
                left: left + 30,
                top : top+50,
            });

        } else {
            $('#imgNoteShare').css('display', 'none');
            $('#imgNewsSearch').css('display', 'none');
        }
    });

    //分享到笔记
    $('#imgNoteShare').click(function () {
        var txt = funGetSelectTxt(),
            title = $('title').html();
        if (txt) {
            console.log(txt);
        }
    });
    //点击搜索的操作 txt 为获取的文本
    $('#imgNewsSearch').click(function () {
        var txt = funGetSelectTxt(),
            title = $('title').html();
        if (txt) {
            console.log(txt); 
        }
    });
