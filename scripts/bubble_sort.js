//  green: #80FF33
// blue: #337DFF
// red: #FF3333
// yellow: #FFF633

function Bubble()
{
    //Setting Time complexities
    document.getElementById("Time_Worst").innerText="O(N^2)";
    document.getElementById("Time_Average").innerText="Θ(N^2)";
    document.getElementById("Time_Best").innerText="Ω(N)";

    //Setting Space complexity
    document.getElementById("Space_Worst").innerText="O(1)";

    c_delay=0;

    for(var i=0;i<array_size-1;i++)
    {
        for(var j=0;j<array_size-i-1;j++)
        {
            div_update(divs[j],div_sizes[j],"#FFF633");//Color update

            if(div_sizes[j]>div_sizes[j+1])
            {
                div_update(divs[j],div_sizes[j], "#FF3333");//Color update
                div_update(divs[j+1],div_sizes[j+1], "#FF3333");//Color update

                var temp=div_sizes[j];
                div_sizes[j]=div_sizes[j+1];
                div_sizes[j+1]=temp;

                div_update(divs[j],div_sizes[j], "#FF3333");//Height update
                div_update(divs[j+1],div_sizes[j+1], "#FF3333");//Height update
            }
            div_update(divs[j],div_sizes[j], "#337DFF");//Color updat
        }
        div_update(divs[j],div_sizes[j], "#80FF33");//Color update
    }
    div_update(divs[0],div_sizes[0], "#80FF33");//Color update

    enable_buttons();
}

 