
/**
 * 创建人：李智勇
 * 创建时间： 2017/3/1.
 * 描述：
 */
$(function(){
    var urlInput = document.querySelector('#url-input');
    var nameInput = document.querySelector('#name-input');
    urlInput.value = 'https: //gitrepository';

    var btnCreate = document.querySelector('#btn-create');
    var btnDeploy = document.querySelector('#btn-deploy');

    var timestamp = new Date().getTime();
    nameInput.value = 'Branch-' + timestamp;

    getBranchesInfo();

    btnCreate.onclick = function(){
        $.ajax({
            url:"/controller",
            data:{username: nameInput.value},
            dataType:"json",
            type:"get",
            success:function (data) {
                alert(data.message);
                drawChart([
                  [{v:'Master', f:'Master'},
                   ''],
                  ['Jim', 'Master'],
                  ['Alice', 'Master']
                ]);
            },
            error:function (err) {
                console.log(err);
            }
        });
    }

    btnDeploy.onclick = function(){

    }


});


function getBranchesInfo(){
    $.ajax({
        url:"/controller",
        data:{},
        dataType:"json",
        type:"get",
        success:function (data) {
            console.log(data);


            drawChart([
              [{v:'Master', f:'Master'},
               ''],
              ['Jim', 'Master'],
              ['Alice', 'Master']
            ]);


        },
        error:function (err) {
            console.log(err);
        }
    });
}


// google.charts.load('current', {packages:["orgchart"]});
// google.charts.setOnLoadCallback(drawChart);
function drawChart(myData) {
    myData = myData ? myData : [];
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Name');
    data.addColumn('string', 'Manager');

    // For each orgchart box, provide the name, manager, and tooltip to show.
    data.addRows(myData);
    var chart = new google.visualization.OrgChart(document.getElementById('chart_div'));
    // Draw the chart, setting the allowHtml option to true for the tooltips.
    chart.draw(data, {allowHtml:true});
}

















