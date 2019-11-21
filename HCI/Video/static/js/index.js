
window.onload  = function() {
    let videoFile = document.querySelector('#videoFile');
    let video = document.querySelector('#my_video')
    videoFile.addEventListener('change', extractionFileUploaded, false);
    function extractionFileUploaded() {
        if (this.files.length != 1) {
        return;
        }
        var url = URL.createObjectURL(this.files[0]);
        console.log(url);
        video.src = url;


    }



    var videotime = ['0','6','46','80','117']
    //ar player = videojs('my_video');
    var video_segs = document.getElementsByClassName("list_items");
    for(var i=0; i<video_segs.length; i++){
        (function(j){
            video_segs[j].onclick = function () {
            //alert(j);
            //console.log(player.currentTime())
            video.currentTime=videotime[j];
            video.play();
        };
        })(i)}

        var frameValue_Chart = echarts.init(document.getElementById('chart'));
        $.get('static/data/data.json',function(data){
            //console.log(data)
            var xAxisData = [];
            var frameValue = [];
            for(var i=0;i<data.length;i++){
                xAxisData.push(data[i]['index']/25)
                frameValue.push(data[i]['value'])
            }
            frameValue_Chart.setOption(option={
                title: {
                    text: '帧得分'
                },
                tooltip: {},
                xAxis: {
                    data: xAxisData,
                    silent: false,
                    splitLine: {
                        show: false
                    },
                    axisLabel:{interval:249}
                },
                yAxis: {
                },
                series: [{
                    type: 'bar',
                    data: data,
                }
                ]
            })
        })
        //setTimeout(function () {Option = frameValue_Chart.getOption(); }, 3000);
        //setTimeout(function () {window.setInterval(showtime, 40); }, 4000);
        
        function showtime() 
        {
            //console.log(newOption.series[0].data)
            currentTime = player.currentTime();
            //console.log(parseInt(currentTime/25))
            value = Option.series[0].data[parseInt(currentTime*25)]
            var newOption =  Option;
            newOption.series[0].data[parseInt(currentTime*25)] =  { value:value,
            itemStyle: {
                color: 'yellow',
            }}
            console.log(Option.series[0].data)
            frameValue_Chart.clear()
            frameValue_Chart.setOption(newOption,true)
        } 
}