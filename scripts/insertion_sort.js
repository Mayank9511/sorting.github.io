//  green: #80FF33
// blue: #337DFF
// red: #FF3333
// yellow: #FFF633  

function Insertion()
{
    //Setting Time complexities
    document.getElementById("Time_Worst").innerText="O(N^2)";
    document.getElementById("Time_Average").innerText="Θ(N^2)";
    document.getElementById("Time_Best").innerText="Ω(N)";

    //Setting Space complexity
    document.getElementById("Space_Worst").innerText="O(1)";

    c_delay=0;

    for(var j=0;j<array_size;j++)
    {
        div_update(divs[j],div_sizes[j],"#FFF633");//Color update

        var key= div_sizes[j];
        var i=j-1;
        while(i>=0 && div_sizes[i]>key)
        {
            div_update(divs[i],div_sizes[i],"#FF3333");//Color update
            div_update(divs[i+1],div_sizes[i+1],"#FF3333");//Color update

            div_sizes[i+1]=div_sizes[i];

            div_update(divs[i],div_sizes[i],"#FF3333");//Height update
            div_update(divs[i+1],div_sizes[i+1],"#FF3333");//Height update
    
            div_update(divs[i],div_sizes[i],"#337DFF");//Color update
            if(i==(j-1))
            {
                div_update(divs[i+1],div_sizes[i+1],"#FFF633");//Color update
            }
            else
            {
                div_update(divs[i+1],div_sizes[i+1],"#337DFF");//Color update
            }
            i-=1;
        }
        div_sizes[i+1]=key;

        for(var t=0;t<j;t++)
        {
            div_update(divs[t],div_sizes[t],"#80FF33");//Color update
        }
    }
    div_update(divs[j-1],div_sizes[j-1],"#80FF33");//Color update

    enable_buttons();
}

 