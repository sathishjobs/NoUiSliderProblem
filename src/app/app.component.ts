import { Component,OnInit,AfterViewInit} from '@angular/core';
// import { noUiSlider } from "../noUiSlider";
declare var noUiSlider:any;
declare var document : any;
declare var Math : any;
declare var $ : any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,AfterViewInit{
  title = 'Slider Problem';
  slider ;
  ngOnInit(){
     this.slider = document.getElementById('slider-range');

        noUiSlider.create(this.slider, {
        start: [0],
        connect: true,
        range: {
          'min': 0,
          'max': 100
        }
      });

      

   
  }

  ngAfterViewInit(){
       console.log(this.slider.noUiSlider);
       this.slider.noUiSlider.on('change', function(e){
        //console.log(e);  
      });

      this.slider.noUiSlider.on('update', function(d){
      // addClassFor(lUpdate, 'tShow', 450);
      console.log(Math.round(d));
          
    });


  }

  createModel(id){
    console.log("this is triggered");
    $("#"+id).modal("show");
  }


}
