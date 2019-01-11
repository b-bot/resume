/**
 * K3D demos
 *
 * Copyright (C) Kevin Roast 2010
 * http://www.kevs3d.co.uk/dev
 * email: kevtoast at yahoo.com
 * twitter: @kevinroast
 *
 * 26/11/09 First version
 *
 * I place this code in the public domain - because it's not rocket science
 * and it won't make me any money, so do whatever you want with it, go crazy.
 * I would appreciate an email or tweet if you do anything fun with it!
 */

var KEY = { SHIFT:16, CTRL:17, ESC:27, RIGHT:39, UP:38, LEFT:37, DOWN:40, SPACE:32,
            A:65, E:69, L:76, P:80, R:82, Z:90 };

var bitmaps = [];

/**
 * Global window onload handler
 */
function onloadHandler()
{
   // get the images loading
   bitmaps.push(new Image());
   bitmaps.push(new Image());
   var loader = new Preloader();
   loader.addImage(bitmaps[0], 'images/texture4.png');
   loader.addImage(bitmaps[1], 'images/texture5.png');

   // start the demos once all images have been loaded
   loader.onLoadCallback(init);
}

function init()
{
   // canvas demo areas
   var canvas1 = document.getElementById('canvas1');
   var canvas2 = document.getElementById('canvas2');
   var canvas3 = document.getElementById('canvas3');
   var canvas4 = document.getElementById('canvas4');
   var canvas5 = document.getElementById('canvas5');

   var k3dmain1 = new K3D.RequestAnimController(canvas1);
   k3dmain1.clearingStrategy = "combineobjects";
   var k3dmain2 = new K3D.RequestAnimController(canvas2);
   k3dmain2.clearingStrategy = "eachobject";
   var k3dmain3 = new K3D.RequestAnimController(canvas3);
   k3dmain3.clearingStrategy = "eachobject";
   var k3dmain4 = new K3D.RequestAnimController(canvas4);
   k3dmain4.clearingStrategy = "eachobject";
   var k3dmain5 = new K3D.RequestAnimController(canvas5);
   k3dmain5.clearingStrategy = "eachobject";


   // generate test objects

   // A snake of cubes
   for (var i=0, j=24; i<j; i++)
   {
      var obj = new K3D.K3DObject();
      obj.ophi = (360 / j) * i;
      obj.otheta = (180 / j) * i;
      with (obj)
      {
         drawmode = "wireframe";
         addgamma = 0.5; addtheta = -1.0; addphi = -0.75;
         aboutx = 100; abouty = -100; aboutz = -25;
         scale = 15;
         init(
            [{x:-1,y:1,z:-1}, {x:1,y:1,z:-1}, {x:1,y:-1,z:-1}, {x:-1,y:-1,z:-1}, {x:-1,y:1,z:1}, {x:1,y:1,z:1}, {x:1,y:-1,z:1}, {x:-1,y:-1,z:1}],
            [{a:0,b:1}, {a:1,b:2}, {a:2,b:3}, {a:3,b:0}, {a:4,b:5}, {a:5,b:6}, {a:6,b:7}, {a:7,b:4}, {a:0,b:4}, {a:1,b:5}, {a:2,b:6}, {a:3,b:7}],
            [{color:[255,0,0],vertices:[0,1,2,3]},{color:[0,255,0],vertices:[0,4,5,1]},{color:[0,0,255],vertices:[1,5,6,2]},{color:[255,255,0],vertices:[2,6,7,3]},{color:[0,255,255],vertices:[3,7,4,0]},{color:[255,0,255],vertices:[7,6,5,4]}]
         );
      }
      k3dmain1.addK3DObject(obj);
   }


   // distribute points on the surface of a sphere in a spiral
   var N = 400;
   var pts = [], edges = [];
   var s = 3.6/Math.sqrt(N);
   var len = 0;
   var dz = 2.0/N;
   var z = 1 - dz/2;
   for (var k=0; k<N; k++)
   {
      var r = Math.sqrt(1 - z*z);
      pts.push({x: Math.cos(len)*r*100, y: Math.sin(len)*r*100, z: z*100});
      if (k !== 0)
      {
         edges.push({a: k-1, b: k});
      }
      z = z - dz;
      len = len + s/r;
   }

   // points spiral sphere
   var obj1 = new K3D.K3DObject();
   with (obj1)
   {
      addgamma = 1.0; addtheta = 1.0; addphi = -0.5;
      linescale = 4.0;
   }
   obj1.init(pts, edges, []);
   k3dmain2.addK3DObject(obj1);

   // wireframe spiral sphere
   var obj2 = new K3D.K3DObject();
   with (obj2)
   {
      drawmode = "wireframe";
      addgamma = 1.0; addtheta = -0.5; addphi = 0.25;
      linescale = 2;
   }
   obj2.init(pts, edges, []);
   k3dmain4.addK3DObject(obj2);


   // Icosahedron
   // Generator code from "Tessellation of sphere" http://student.ulb.ac.be/~claugero/sphere/index.html
   var obj = new K3D.K3DObject();
   var t = (1+Math.sqrt(5))/2;
   var tau = t/Math.sqrt(1+t*t);
   var one = 1/Math.sqrt(1+t*t);
   with (obj)
   {
      drawmode = "solid";
      shademode = "lightsource";
      fillmode = "inflate";
      aboutx = 0; abouty = 0; aboutz = 0;
      addgamma = 0.5; addtheta = -0.4; addphi = 0.6;
      scale = 100;
      linescale = 4.0;
      init(
         [{x:tau,y:one,z:0}, {x:-tau,y:one,z:0}, {x:-tau,y:-one,z:0}, {x:tau,y:-one,z:0}, {x:one,y:0,z:tau}, {x:one,y:0,z:-tau}, {x:-one,y:0,z:-tau}, {x:-one,y:0,z:tau}, {x:0,y:tau,z:one}, {x:0,y:-tau,z:one}, {x:0,y:-tau,z:-one}, {x:0,y:tau,z:-one}],
         [{a:4,b:8}, {a:8,b:7}, {a:7,b:4}, {a:7,b:9}, {a:9,b:4}, {a:5,b:6}, {a:6,b:11}, {a:11,b:5}, {a:5,b:10}, {a:10,b:6}, {a:0,b:4}, {a:4,b:3}, {a:3,b:0}, {a:3,b:5}, {a:5,b:0}, {a:2,b:7}, {a:7,b:1}, {a:1,b:2}, {a:1,b:6}, {a:6,b:2}, {a:8,b:0}, {a:0,b:11}, {a:11,b:8}, {a:11,b:1}, {a:1,b:8}, {a:9,b:10}, {a:10,b:3}, {a:3,b:9}, {a:9,b:2}, {a:2,b:10} ],
         [{color:[255,255,255],vertices:[4, 8, 7]}, {color:[255,255,0],vertices:[4, 7, 9]}, {color:[0,255,255],vertices:[5, 6, 11]}, {color:[128,0,255],vertices:[5, 10, 6]}, {color:[0,0,255],vertices:[0, 4, 3]}, {color:[255,0,0],vertices:[0, 3, 5]}, {color:[0,255,0],vertices:[2, 7, 1]}, {color:[255,0,0],vertices:[2, 1, 6]}, {color:[128,128,128],vertices:[8, 0, 11]}, {color:[255,128,0],vertices:[8, 11, 1]}, {color:[0,128,255],vertices:[9, 10, 3]}, {color:[255,0,128],vertices:[9, 2, 10]}, {color:[0,128,255],vertices:[8, 4, 0]}, {color:[128,255,0],vertices:[11, 0, 5]}, {color:[0,255,128],vertices:[4, 9, 3]}, {color:[128,255,255],vertices:[5, 3, 10]}, {color:[255,128,255],vertices:[7, 8, 1]}, {color:[128,0,255],vertices:[6, 1, 11]}, {color:[0,255,128],vertices:[7, 2, 9]}, {color:[255,0,255],vertices:[6, 10, 2]}]
      );
   }
   k3dmain3.addK3DObject(obj);


   // tesselated sphere - strips of tris have been converted to quads
   var obj = new K3D.K3DObject();
   obj.textures.push(bitmaps[0]);
   obj.textures.push(bitmaps[1]);
   with (obj)
   {
      drawmode = "solid";
      shademode = "lightsource";
      fillmode = "inflate";
      addgamma = 0.3; addtheta = 0.5; addphi = -0.4;
      ophi = 45; ogamma = 45; otheta = 45;
      scale = 100;
      linescale = 4.0;
      init(
         [{x:0.0000,y:0.0000,z:1.0000}, {x:0.0000,y:0.3827,z:0.9239}, {x:-0.1464,y:0.3536,z:0.9239},
          {x:-0.2706,y:0.2706,z:0.9239}, {x:-0.3536,y:0.1464,z:0.9239}, {x:-0.3827,y:0.0000,z:0.9239},
          {x:-0.3536,y:-0.1464,z:0.9239}, {x:-0.2706,y:-0.2706,z:0.9239}, {x:-0.1464,y:-0.3536,z:0.9239},
          {x:0.0000,y:-0.3827,z:0.9239}, {x:0.1464,y:-0.3536,z:0.9239}, {x:0.2706,y:-0.2706,z:0.9239},
          {x:0.3536,y:-0.1464,z:0.9239}, {x:0.3827,y:0.0000,z:0.9239}, {x:0.3536,y:0.1464,z:0.9239},
          {x:0.2706,y:0.2706,z:0.9239}, {x:0.1464,y:0.3536,z:0.9239}, {x:0.0000,y:0.7071,z:0.7071},
          {x:-0.2706,y:0.6533,z:0.7071}, {x:-0.5000,y:0.5000,z:0.7071}, {x:-0.6533,y:0.2706,z:0.7071},
          {x:-0.7071,y:0.0000,z:0.7071}, {x:-0.6533,y:-0.2706,z:0.7071}, {x:-0.5000,y:-0.5000,z:0.7071},
          {x:-0.2706,y:-0.6533,z:0.7071}, {x:0.0000,y:-0.7071,z:0.7071}, {x:0.2706,y:-0.6533,z:0.7071},
          {x:0.5000,y:-0.5000,z:0.7071}, {x:0.6533,y:-0.2706,z:0.7071}, {x:0.7071,y:0.0000,z:0.7071},
          {x:0.6533,y:0.2706,z:0.7071}, {x:0.5000,y:0.5000,z:0.7071}, {x:0.2706,y:0.6533,z:0.7071},
          {x:0.0000,y:0.9239,z:0.3827}, {x:-0.3536,y:0.8536,z:0.3827}, {x:-0.6533,y:0.6533,z:0.3827},
          {x:-0.8536,y:0.3536,z:0.3827}, {x:-0.9239,y:0.0000,z:0.3827}, {x:-0.8536,y:-0.3536,z:0.3827},
          {x:-0.6533,y:-0.6533,z:0.3827}, {x:-0.3536,y:-0.8536,z:0.3827}, {x:0.0000,y:-0.9239,z:0.3827},
          {x:0.3536,y:-0.8536,z:0.3827}, {x:0.6533,y:-0.6533,z:0.3827}, {x:0.8536,y:-0.3536,z:0.3827},
          {x:0.9239,y:0.0000,z:0.3827}, {x:0.8536,y:0.3536,z:0.3827}, {x:0.6533,y:0.6533,z:0.3827},
          {x:0.3536,y:0.8536,z:0.3827}, {x:0.0000,y:1.0000,z:0.0000}, {x:-0.3827,y:0.9239,z:0.0000},
          {x:-0.7071,y:0.7071,z:0.0000}, {x:-0.9239,y:0.3827,z:0.0000}, {x:-1.0000,y:0.0000,z:0.0000},
          {x:-0.9239,y:-0.3827,z:0.0000}, {x:-0.7071,y:-0.7071,z:0.0000}, {x:-0.3827,y:-0.9239,z:0.0000},
          {x:0.0000,y:-1.0000,z:0.0000}, {x:0.3827,y:-0.9239,z:0.0000}, {x:0.7071,y:-0.7071,z:0.0000},
          {x:0.9239,y:-0.3827,z:0.0000}, {x:1.0000,y:0.0000,z:0.0000}, {x:0.9239,y:0.3827,z:0.0000},
          {x:0.7071,y:0.7071,z:0.0000}, {x:0.3827,y:0.9239,z:0.0000}, {x:0.0000,y:0.9239,z:-0.3827},
          {x:-0.3536,y:0.8536,z:-0.3827}, {x:-0.6533,y:0.6533,z:-0.3827}, {x:-0.8536,y:0.3536,z:-0.3827},
          {x:-0.9239,y:0.0000,z:-0.3827}, {x:-0.8536,y:-0.3536,z:-0.3827}, {x:-0.6533,y:-0.6533,z:-0.3827},
          {x:-0.3536,y:-0.8536,z:-0.3827}, {x:0.0000,y:-0.9239,z:-0.3827}, {x:0.3536,y:-0.8536,z:-0.3827},
          {x:0.6533,y:-0.6533,z:-0.3827}, {x:0.8536,y:-0.3536,z:-0.3827}, {x:0.9239,y:0.0000,z:-0.3827},
          {x:0.8536,y:0.3536,z:-0.3827}, {x:0.6533,y:0.6533,z:-0.3827}, {x:0.3536,y:0.8536,z:-0.3827},
          {x:0.0000,y:0.7071,z:-0.7071}, {x:-0.2706,y:0.6533,z:-0.7071}, {x:-0.5000,y:0.5000,z:-0.7071},
          {x:-0.6533,y:0.2706,z:-0.7071}, {x:-0.7071,y:0.0000,z:-0.7071}, {x:-0.6533,y:-0.2706,z:-0.7071},
          {x:-0.5000,y:-0.5000,z:-0.7071}, {x:-0.2706,y:-0.6533,z:-0.7071}, {x:0.0000,y:-0.7071,z:-0.7071},
          {x:0.2706,y:-0.6533,z:-0.7071}, {x:0.5000,y:-0.5000,z:-0.7071}, {x:0.6533,y:-0.2706,z:-0.7071},
          {x:0.7071,y:0.0000,z:-0.7071}, {x:0.6533,y:0.2706,z:-0.7071}, {x:0.5000,y:0.5000,z:-0.7071},
          {x:0.2706,y:0.6533,z:-0.7071}, {x:0.0000,y:0.3827,z:-0.9239}, {x:-0.1464,y:0.3536,z:-0.9239},
          {x:-0.2706,y:0.2706,z:-0.9239}, {x:-0.3536,y:0.1464,z:-0.9239}, {x:-0.3827,y:0.0000,z:-0.9239},
          {x:-0.3536,y:-0.1464,z:-0.9239}, {x:-0.2706,y:-0.2706,z:-0.9239}, {x:-0.1464,y:-0.3536,z:-0.9239},
          {x:0.0000,y:-0.3827,z:-0.9239}, {x:0.1464,y:-0.3536,z:-0.9239}, {x:0.2706,y:-0.2706,z:-0.9239},
          {x:0.3536,y:-0.1464,z:-0.9239}, {x:0.3827,y:0.0000,z:-0.9239}, {x:0.3536,y:0.1464,z:-0.9239},
          {x:0.2706,y:0.2706,z:-0.9239}, {x:0.1464,y:0.3536,z:-0.9239}, {x:0.0000,y:0.0000,z:-1.0000} ],
         [],
         [{vertices:[0,1,2]}, {vertices:[0,2,3]}, {vertices:[0,3,4]}, {vertices:[0,4,5]}, {vertices:[0,5,6]}, {vertices:[0,6,7]}, {vertices:[0,7,8]}, {vertices:[0,8,9]}, {vertices:[0,9,10]},
          {vertices:[0,10,11]}, {vertices:[0,11,12]}, {vertices:[0,12,13]}, {vertices:[0,13,14]}, {vertices:[0,14,15]}, {vertices:[0,15,16]}, {vertices:[0,16,1]}, {vertices:[1,17,18,2]},
          {vertices:[2,18,19,3]}, {vertices:[3,19,20,4]}, {vertices:[4,20,21,5]}, {vertices:[5,21,22,6]}, {vertices:[6,22,23,7]},
          {vertices:[7,23,24,8]}, {vertices:[8,24,25,9]}, {vertices:[9,25,26,10]}, {vertices:[10,26,27,11]},
          {vertices:[11,27,28,12]}, {vertices:[12,28,29,13]}, {vertices:[13,29,30,14]}, {vertices:[14,30,31,15]}, {vertices:[15,31,32,16]},
          {vertices:[16,32,17,1]}, {vertices:[17,33,34,18]}, {vertices:[18,34,35,19]}, {vertices:[19,35,36,20]},
          {vertices:[20,36,37,21]}, {vertices:[21,37,38,22]}, {vertices:[22,38,39,23]}, {vertices:[23,39,40,24]}, {vertices:[24,40,41,25]},
          {vertices:[25,41,42,26]}, {vertices:[26,42,43,27]}, {vertices:[27,43,44,28]}, {vertices:[28,44,45,29]},
          {vertices:[29,45,46,30]}, {vertices:[30,46,47,31]}, {vertices:[31,47,48,32]}, {vertices:[32,48,33,17]},
          {vertices:[33,49,50,34],texture:0}, {vertices:[34,50,51,35],texture:0}, {vertices:[35,51,52,36],texture:0}, {vertices:[36,52,53,37],texture:0}, {vertices:[37,53,54,38],texture:0},
          {vertices:[38,54,55,39],texture:0}, {vertices:[39,55,56,40],texture:0}, {vertices:[40,56,57,41],texture:0}, {vertices:[41,57,58,42],texture:0}, {vertices:[42,58,59,43],texture:0},
          {vertices:[43,59,60,44],texture:0}, {vertices:[44,60,61,45],texture:0}, {vertices:[45,61,62,46],texture:0}, {vertices:[46,62,63,47],texture:0},
          {vertices:[47,63,64,48],texture:0}, {vertices:[48,64,49,33],texture:0},
          {vertices:[49,65,66,50],texture:1}, {vertices:[50,66,67,51],texture:1}, {vertices:[51,67,68,52],texture:1},
          {vertices:[52,68,69,53],texture:1}, {vertices:[53,69,70,54],texture:1}, {vertices:[54,70,71,55],texture:1}, {vertices:[55,71,72,56],texture:1},
          {vertices:[56,72,73,57],texture:1}, {vertices:[57,73,74,58],texture:1}, {vertices:[58,74,75,59],texture:1}, {vertices:[59,75,76,60],texture:1}, {vertices:[60,76,77,61],texture:1},
          {vertices:[61,77,78,62],texture:1}, {vertices:[62,78,79,63],texture:1}, {vertices:[63,79,80,64],texture:1}, {vertices:[64,80,65,49],texture:1},
          {vertices:[65,81,82,66]}, {vertices:[66,82,83,67]}, {vertices:[67,83,84,68]}, {vertices:[68,84,85,69]}, {vertices:[69,85,86,70]},
          {vertices:[70,86,87,71]}, {vertices:[71,87,88,72]}, {vertices:[72,88,89,73]}, {vertices:[73,89,90,74]},
          {vertices:[74,90,91,75]}, {vertices:[75,91,92,76]}, {vertices:[76,92,93,77]}, {vertices:[77,93,94,78]}, {vertices:[78,94,95,79]},
          {vertices:[79,95,96,80]}, {vertices:[80,96,81,65]}, {vertices:[81,97,98,82]}, {vertices:[82,98,99,83]},
          {vertices:[83,99,100,84]}, {vertices:[84,100,101,85]}, {vertices:[85,101,102,86]}, {vertices:[86,102,103,87]}, {vertices:[87,103,104,88]},
          {vertices:[88,104,105,89]}, {vertices:[89,105,106,90]}, {vertices:[90,106,107,91]}, {vertices:[91,107,108,92]},
          {vertices:[92,108,109,93]}, {vertices:[93,109,110,94]}, {vertices:[94,110,111,95]}, {vertices:[95,111,112,96]}, {vertices:[96,112,97,81]},
          {vertices:[113,98,97]}, {vertices:[113,99,98]}, {vertices:[113,100,99]}, {vertices:[113,101,100]}, {vertices:[113,102,101]}, {vertices:[113,103,102]}, {vertices:[113,104,103]}, {vertices:[113,105,104]},
          {vertices:[113,106,105]}, {vertices:[113,107,106]}, {vertices:[113,108,107]}, {vertices:[113,109,108]}, {vertices:[113,110,109]}, {vertices:[113,111,110]}, {vertices:[113,112,111]}, {vertices:[113,97,112]} ]
         );
   }
   k3dmain5.addK3DObject(obj);


   // add lightsource for solid object demo
   var light = new K3D.LightSource({x:70,y:70,z:-70}, [0.0,0.75,1.0], 70.0);
   light.addgamma = 2.5;
   k3dmain5.addLightSource(light);
   light = new K3D.LightSource({x:-50,y:-50,z:-70}, [1.0,1.0,0.0], 70.0);
   light.addgamma = 1.5;
   k3dmain5.addLightSource(light);
   // add an object to represent the lightsource so it is visible in the scene
   var lightObj = new K3D.K3DObject();
   with (lightObj)
   {
      color = [0,192,255];
      drawmode = "point";
      shademode = "plain";
      addgamma = 2.5;
      linescale = 16.0;
      init([{x:70,y:70,z:-70}], [], []);
   }
   k3dmain5.addK3DObject(lightObj);
   lightObj = new K3D.K3DObject();
   with (lightObj)
   {
      color = [255,255,0];
      drawmode = "point";
      shademode = "plain";
      addgamma = 1.5;
      linescale = 16.0;
      init([{x:-50,y:-50,z:-70}], [], []);
   }
   k3dmain5.addK3DObject(lightObj);

   // render first frames
   k3dmain1.frame();
   // use motion blur background fill
   k3dmain2.fillStyle = "rgba(0,0,0, 0.50)";
   k3dmain2.frame();
   k3dmain3.frame();
   k3dmain4.fillStyle = "rgba(0,0,0, 0.50)";
   k3dmain4.frame();
   k3dmain5.frame();

   // start main demo
   k3dmain1.paused = false;
   k3dmain1.frame();


   // bind document keyhandler to aid debugging
   document.onkeydown = function(event)
   {
      var keyCode = (event === null ? window.event.keyCode : event.keyCode);

      switch (keyCode)
      {
         case KEY.SPACE:
         {
            var obj = k3dmain3.objects[0];
            switch (obj.drawmode)
            {
               case "point":
                  obj.shademode = "depthcue";
                  obj.drawmode = "wireframe";
                  break;
               case "wireframe":
                  obj.shademode = "lightsource";
                  obj.drawmode = "solid";
                  break;
               case "solid":
                  obj.shademode = "depthcue";
                  obj.drawmode = "point";
                  break;
            }
            break;
         }
      }
   };
}

var DEBUG={};if(typeof K3D=="undefined"||!K3D){var K3D={}}(function(){K3D.BaseController=function(){this.objects=[];this.lights=[];this.renderers=[];this.renderers.point=new K3D.PointRenderer();this.renderers.wireframe=new K3D.WireframeRenderer();this.renderers.solid=new K3D.SolidRenderer()};K3D.BaseController.prototype={renderers:null,objects:null,lights:null,sort:true,clearBackground:true,clearingStrategy:"all",fillStyle:null,addK3DObject:function(a){a.setController(this);this.objects.push(a)},addLightSource:function(a){this.lights.push(a)},getRenderer:function(a){return this.renderers[a]},resetBackground:function(j){if(this.clearBackground){if(this.fillStyle){j.fillStyle=this.fillStyle}switch(this.clearingStrategy){case"all":if(this.fillStyle){j.fillRect(0,0,this.canvas.width,this.canvas.height)}else{j.clearRect(0,0,this.canvas.width,this.canvas.height)}case"eachobject":for(var d=0,e=this.objects.length,c,b;d<e;d++){c=this.objects[d];switch(c.drawmode){case"point":b=(c.outputlinescale?c.outputlinescale:c.linescale)+1;if(this.fillStyle){j.fillRect(Floor(c.rminx)-b,Floor(c.rminy)-b,(Ceil(c.rmaxx)-Floor(c.rminx))+b*2+1,(Ceil(c.rmaxy)-Floor(c.rminy))+b*2+1)}else{j.clearRect(Floor(c.rminx)-b,Floor(c.rminy)-b,(Ceil(c.rmaxx)-Floor(c.rminx))+b*2+1,(Ceil(c.rmaxy)-Floor(c.rminy))+b*2+1)}break;case"wireframe":b=(c.outputlinescale?c.outputlinescale:c.linescale)*2;if(this.fillStyle){j.fillRect(Floor(c.rminx)-b,Floor(c.rminy)-b,(Ceil(c.rmaxx)-Floor(c.rminx))+b*2+1,(Ceil(c.rmaxy)-Floor(c.rminy))+b*2+1)}else{j.clearRect(Floor(c.rminx)-b,Floor(c.rminy)-b,(Ceil(c.rmaxx)-Floor(c.rminx))+b*2+1,(Ceil(c.rmaxy)-Floor(c.rminy))+b*2+1)}break;case"solid":if(this.fillStyle){j.fillRect(Floor(c.rminx)-1,Floor(c.rminy)-1,(Ceil(c.rmaxx)-Floor(c.rminx))+1,(Ceil(c.rmaxy)-Floor(c.rminy))+1)}else{j.clearRect(Floor(c.rminx)-1,Floor(c.rminy)-1,Ceil(c.rmaxx)-Floor(c.rminx)+1,Ceil(c.rmaxy)-Floor(c.rminy)+1)}break}}case"combineobjects":var a=1,k=4096,g=-4096,h=4096,f=-4096;for(var d=0,e=this.objects.length,c,b;d<e;d++){c=this.objects[d];switch(c.drawmode){case"point":b=(c.outputlinescale?c.outputlinescale:c.linescale)+1;if(b>a){a=b}break;case"wireframe":b=(c.outputlinescale?c.outputlinescale:c.linescale)*2;if(b>a){a=b}break}if(c.rminx<k){k=c.rminx}if(c.rmaxx>g){g=c.rmaxx}if(c.rminy<h){h=c.rminy}if(c.rmaxy>f){f=c.rmaxy}}if(this.fillStyle){j.fillRect(Floor(k)-a,Floor(h)-a,(Ceil(g)-Floor(k))+a*2+1,(Ceil(f)-Floor(h))+a*2+1)}else{j.clearRect(Floor(k)-a,Floor(h)-a,(Ceil(g)-Floor(k))+a*2+1,(Ceil(f)-Floor(h))+a*2+1)}}}},processFrame:function(c){var g=this.objects;for(var f=0,a=g.length;f<a;f++){g[f].executePipeline()}var e=this.lights;for(var f=0,a=e.length;f<a;f++){e[f].executePipeline()}if(this.sort){g.forEach(function b(k,j,h){k.averagez=null});g.sort(function d(i,h){if(i.averagez===null){i.calculateAverageZ()}if(h.averagez===null){h.calculateAverageZ()}return(i.averagez<h.averagez?1:-1)})}for(var f=0,a=g.length;f<a;f++){c.save();g[f].executeRenderer(c);c.restore()}}}})();(function(){K3D.Controller=function(b,a){K3D.Controller.superclass.constructor.call(this);this.canvas=b;var c=this;if(!a){b.onclick=function(d){c.paused=!c.paused;if(!c.paused){c.frame()}}}};extend(K3D.Controller,K3D.BaseController,{canvas:null,paused:true,callback:null,fps:40,lastFrameStart:0,addK3DObject:function(a){a.setController(this,this.canvas.width,this.canvas.height);this.objects.push(a)},tick:function(){this.frame()},frame:function(){var f=new Date().getTime();if(this.callback){this.callback.call(this)}var a=this.canvas.getContext("2d");if(this.lastFrameStart){this.resetBackground(a)}this.processFrame(a);var b=1000/this.fps;var e=(new Date().getTime()-f);if(!this.paused){var d=this;setTimeout(function(){d.frame()},b-e<=0?1:b-e)}if(DEBUG&&DEBUG.FPS){a.fillStyle="grey";a.fillText("TPF: "+e,4,16);var c=Math.round(1000/(f-this.lastFrameStart));a.fillText("FPS: "+c,4,24)}this.lastFrameStart=f}})})();(function(){K3D.RequestAnimController=function(b,a){K3D.Controller.superclass.constructor.call(this);this.canvas=b;this.framecount=1;var c=this;if(!a){b.onclick=function(d){c.paused=!c.paused;if(!c.paused){c.frame()}}}};extend(K3D.RequestAnimController,K3D.BaseController,{canvas:null,paused:true,callback:null,totalfps:0,framecount:0,lastFrameStart:0,addK3DObject:function(a){a.setController(this,this.canvas.width,this.canvas.height);this.objects.push(a)},frame:function(){var g=Date.now();if(this.callback){this.callback.call(this)}var b=this.canvas.getContext("2d");this.resetBackground(b);this.processFrame(b);var f=(Date.now()-g);if(!this.paused){var a=~~(1000/60-f),e=this;requestAnimFrame(function(){e.frame.call(e)},a)}if(DEBUG&&DEBUG.FPS){b.save();var d=Math.round(1000/(g-this.lastFrameStart)),c=Math.round((this.totalfps+=d)/(this.framecount++));b.fillStyle="white";b.fillRect(4,4,128,10);b.fillStyle="black";b.fillText("TPF: "+f+" FPS: "+d+" AVF: "+c,4,12);b.restore()}this.lastFrameStart=g}})})();window.requestAnimFrame=(function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(b,a){window.setTimeout(b,a)}})();(function(){K3D.BaseObject=function(){this.matrix=new Array(3);for(var a=0;a<3;a++){this.matrix[a]=new Array(3)}this.angles=new Array(6);return this};K3D.BaseObject.prototype={matrix:null,angles:null,offx:0,offy:0,offz:0,aboutx:0,abouty:0,aboutz:0,ogamma:0,otheta:0,ophi:0,addgamma:0,addtheta:0,addphi:0,velx:0,vely:0,velz:0,bminx:0,bminy:0,bminz:0,bmaxx:0,bmaxy:0,bmaxz:0,rminx:0,rminy:0,rmaxx:0,rmaxy:0,doublesided:false,calcMatrix:function(){var b=this.angles,a=this.matrix;b[0]=Sin(this.ogamma*RAD);b[1]=Cos(this.ogamma*RAD);b[2]=Sin(this.otheta*RAD);b[3]=Cos(this.otheta*RAD);b[4]=Sin(this.ophi*RAD);b[5]=Cos(this.ophi*RAD);a[0][0]=b[5]*b[1];a[1][0]=-(b[5]*b[0]);a[2][0]=b[4];a[0][1]=(b[2]*b[4]*b[1])+(b[3]*b[0]);a[1][1]=(b[3]*b[1])-(b[2]*b[4]*b[0]);a[2][1]=-(b[2]*b[5]);a[0][2]=(b[2]*b[0])-(b[3]*b[4]*b[1]);a[1][2]=(b[2]*b[1])+(b[3]*b[4]*b[0]);a[2][2]=b[3]*b[5]},transformToWorld:function(){},executePipeline:function(){this.ogamma+=this.addgamma;this.otheta+=this.addtheta;this.ophi+=this.addphi;this.offx+=this.velx;this.offy+=this.vely;this.offz+=this.velz;if(this.offx<this.bminx||this.offx>this.bmaxx){this.velx*=-1}if(this.offy<this.bminy||this.offy>this.bmaxy){this.vely*=-1}if(this.offz<this.bminz||this.offz>this.bmaxz){this.velz*=-1}this.calcMatrix();this.transformToWorld()}}})();(function(){K3D.K3DObject=function(){K3D.K3DObject.superclass.constructor.call(this);this.textures=[];return this};extend(K3D.K3DObject,K3D.BaseObject,{controller:null,worldcoords:null,screenx:0,screeny:0,depthscale:0,linescale:2,color:null,drawmode:"point",shademode:"depthcue",sortmode:"sorted",fillmode:"filltwice",perslevel:1024,scale:0,recalculateNormals:false,points:null,edges:null,faces:null,screencoords:null,averagez:null,textures:null,depthcueColors:null,init:function(v,l,f){this.points=v;this.edges=l;this.faces=f;this.worldcoords=new Array(v.length+f.length);for(var n=0,k=this.worldcoords.length;n<k;n++){this.worldcoords[n]={x:0,y:0,z:0}}this.screencoords=new Array(v.length);for(var n=0,k=this.screencoords.length;n<k;n++){this.screencoords[n]={x:0,y:0}}if(this.scale!==0){for(var n=0,k=this.points.length;n<k;n++){v[n].x*=this.scale;v[n].y*=this.scale;v[n].z*=this.scale}}if(this.color===null){this.color=[255,255,255]}this.depthcueColors=new Array(256);for(var q=0,a,o,t;q<256;q++){a=this.color[0]*(q/255);o=this.color[1]*(q/255);t=this.color[2]*(q/255);this.depthcueColors[q]="rgb("+Ceil(a)+","+Ceil(o)+","+Ceil(t)+")"}for(var n=0,k=f.length,p,e,u,m,d,s,h;n<k;n++){p=f[n].vertices;e=v[p[1]].x-v[p[0]].x;u=v[p[1]].y-v[p[0]].y;m=v[p[1]].z-v[p[0]].z;d=v[p[2]].x-v[p[0]].x;s=v[p[2]].y-v[p[0]].y;h=v[p[2]].z-v[p[0]].z;f[n].normal=calcNormalVector(e,u,m,d,s,h);if(!f[n].color){f[n].color=this.color}if(f[n].texture===undefined){f[n].texture=null}}},setController:function(a,b,c){this.controller=a;if(b){this.screenx=b/2;this.screeny=c/2;this.depthscale=this.screenx;this.bminx=-this.screenx;this.bminy=-this.screeny;this.bminz=-this.screenx;this.bmaxx=this.screenx;this.bmaxy=this.screeny;this.bmaxz=this.screenx}},transformToWorld:function(){var k,h,f;var p=this.points,e=this.worldcoords,b=this.faces,n=this.matrix;var l=this.aboutx,j=this.abouty,g=this.aboutz,d=this.offx,c=this.offy,a=this.offz;var r=n[0],o=n[1],m=n[2];for(var q=0,s=p.length;q<s;q++){k=p[q].x+l;h=p[q].y+j;f=p[q].z+g;e[q].x=(r[0]*k)+(r[1]*h)+(r[2]*f)+d;e[q].y=(o[0]*k)+(o[1]*h)+(o[2]*f)+c;e[q].z=(m[0]*k)+(m[1]*h)+(m[2]*f)+a}for(var q=0,s=b.length,t;q<s;q++){t=b[q].normal;k=t.x;h=t.y;f=t.z;b[q].worldnormal=new Vector3D((r[0]*k)+(r[1]*h)+(r[2]*f),(o[0]*k)+(o[1]*h)+(o[2]*f),(m[0]*k)+(m[1]*h)+(m[2]*f))}},transformToScreen:function(){var k,g,e,a=this.worldcoords,h=this.screencoords,m=this.screenx,l=this.screeny,d=this.perslevel;this.rminx=this.rminy=4096;this.rmaxx=this.rmaxy=-4096;for(var b=0,j,f,c=this.points.length;b<c;b++){k=a[b].x;g=a[b].y;e=a[b].z+d;if(e===0){e=0.001}j=h[b].x=((k*d)/e)+m;f=h[b].y=l-((g*d)/e);if(j<this.rminx){this.rminx=j}if(j>this.rmaxx){this.rmaxx=j}if(f<this.rminy){this.rminy=f}if(f>this.rmaxy){this.rmaxy=f}}},executePipeline:function(){if(this.recalculateNormals){var c=this.faces,m=this.points;for(var g=0,e=c.length,h,b,l,f,a,k,d;g<e;g++){h=c[g].vertices;b=m[h[1]].x-m[h[0]].x;l=m[h[1]].y-m[h[0]].y;f=m[h[1]].z-m[h[0]].z;a=m[h[2]].x-m[h[0]].x;k=m[h[2]].y-m[h[0]].y;d=m[h[2]].z-m[h[0]].z;c[g].normal=calcNormalVector(b,l,f,a,k,d)}}K3D.K3DObject.superclass.executePipeline.call(this);this.transformToScreen();this.controller.getRenderer(this.drawmode).sortByDistance(this)},executeRenderer:function(a){this.controller.getRenderer(this.drawmode).renderObject(this,a)},calculateAverageZ:function(){var d=0,c=this.worldcoords;for(var b=0,a=this.points.length;b<a;b++){d+=c[b].z}this.averagez=d/this.points.length}})})();(function(){K3D.LightSource=function(b,c,a){K3D.LightSource.superclass.constructor.call(this);this.location=b;this.color=c;this.intensity=a;return this};extend(K3D.LightSource,K3D.BaseObject,{color:null,intensity:null,location:null,worldvector:null,transformToWorld:function(){var b=this.matrix;var a=this.location.x+this.aboutx;var d=this.location.y+this.abouty;var c=this.location.z+this.aboutz;this.worldvector=new Vector3D((b[0][0]*a)+(b[0][1]*d)+(b[0][2]*c)+this.offx,(b[1][0]*a)+(b[1][1]*d)+(b[1][2]*c)+this.offy,(b[2][0]*a)+(b[2][1]*d)+(b[2][2]*c)+this.offz)}})})();(function(){K3D.Renderer=function(){};K3D.Renderer.prototype={sortByDistance:function(a){},renderObject:function(b,a){}}})();(function(){K3D.PointRenderer=function(){K3D.PointRenderer.superclass.constructor.call(this);return this};extend(K3D.PointRenderer,K3D.Renderer,{sortByDistance:function(a){if(a.shademode!=="plain"&&a.sortmode==="sorted"){this.quickSortObject(a.screencoords,a.worldcoords,0,a.points.length-1)}},quickSortObject:function(h,c,i,d){var e=i,g=d,f;var b;if(d>i){f=c[(i+d)>>1].z/2;while(e<=g){while(e<d&&c[e].z>f){e++}while(g>i&&c[g].z<f){g--}if(e<=g){b=h[e];h[e]=h[g];h[g]=b;b=c[e];c[e]=c[g];c[g]=b;e++;g--}}if(i<g){this.quickSortObject(h,c,i,g)}if(e<d){this.quickSortObject(h,c,e,d)}}},renderObject:function(f,m){var b,h,k;var j=f.screencoords,d=f.worldcoords,n=f.depthscale,a=n/128,l=f.linescale/255;for(var e=0,g=f.points.length;e<g;e++){h=d[e].z+n;h=h/a;switch(f.shademode){case"lightsource":case"plain":m.fillStyle="rgb("+f.color[0]+","+f.color[1]+","+f.color[2]+")";break;case"depthcue":if(h<0){h=0}else{if(h>255){h=255}}h=255-Ceil(h);m.fillStyle=f.depthcueColors[h];break}k=l*h;if(k<0.1){k=0.1}f.outputlinescale=k;m.beginPath();m.arc(j[e].x,j[e].y,k,0,TWOPI,true);m.closePath();m.fill()}}})})();(function(){K3D.WireframeRenderer=function(){K3D.WireframeRenderer.superclass.constructor.call(this);return this};extend(K3D.WireframeRenderer,K3D.Renderer,{sortByDistance:function(a){if(a.shademode!=="plain"&&a.sortmode==="sorted"){this.quickSortObject(a.worldcoords,a.edges,0,a.edges.length-1)}},quickSortObject:function(i,b,h,c){var d=h,g=c,e;var f;if(c>h){e=((i[(b[(h+c)>>1].a)].z)+(i[(b[(h+c)>>1].b)].z))/2;while(d<=g){while((d<c)&&((i[(b[d].a)].z+i[(b[d].b)].z)/2>e)){d++}while((g>h)&&((i[(b[g].a)].z+i[(b[g].b)].z)/2<e)){g--}if(d<=g){f=b[d];b[d]=b[g];b[g]=f;d++;g--}}if(h<g){this.quickSortObject(i,b,h,g)}if(d<c){this.quickSortObject(i,b,d,c)}}},renderObject:function(h,q){var k,n,m,o;var f=h.edges,l=h.screencoords,e=h.worldcoords;var r=h.depthscale,d=r/128,p=h.linescale/255;q.lineWidth=h.linescale;for(var g=0,j=f.length;g<j;g++){n=f[g].a;m=f[g].b;switch(h.shademode){case"lightsource":case"plain":k=h.color;q.strokeStyle="rgb("+k[0]+","+k[1]+","+k[2]+")";break;case"depthcue":k=((e[n].z+e[m].z)/2)+r;k=k/d;if(k<0){k=0}else{if(k>255){k=255}}k=255-Ceil(k);q.strokeStyle=h.depthcueColors[k];o=p*k;if(o<0.1){o=0.1}h.outputlinescale=o;q.lineWidth=o;break}q.beginPath();q.moveTo(l[n].x,l[n].y);q.lineTo(l[m].x,l[m].y);q.closePath();q.stroke()}}})})();(function(){K3D.SolidRenderer=function(){K3D.SolidRenderer.superclass.constructor.call(this);return this};extend(K3D.SolidRenderer,K3D.Renderer,{sortByDistance:function b(g){if(g.sortmode==="sorted"){this.quickSortObject(g.worldcoords,g.faces,0,g.faces.length-1)}},quickSortObject:function a(j,g,i,h){var l,k;g.sort(function(m,q){l=m.vertices;for(var n=0,p=0;n<l.length;n++){p+=j[l[n]].z}p=p/l.length;k=q.vertices;for(var n=0,o=0;n<k.length;n++){o+=j[k[n]].z}o=o/k.length;return(p<o?1:-1)})},renderObject:function c(y,D){var l=y.faces,m=y.screencoords,s=y.worldcoords;var p=y.depthscale,L=p/128;var z=new Vector3D(0,0,1);var u,A,H,K,J,x=PI/2,t,N=y.controller.lights;var M=y.doublesided;var C=(1/y.perslevel)*256;if(y.fillmode==="fillstroke"){D.lineWidth=1}for(var B=0,G=l.length,w;B<G;B++){w=l[B];u=w.vertices;if(M||z.dot(w.worldnormal)<C){switch(y.shademode){case"plain":if(w.texture===null){J=w.color;t="rgb("+J[0]+","+J[1]+","+J[2]+")";this.renderPolygon(D,y,w,t)}else{this.renderPolygon(D,y,w)}break;case"depthcue":for(var F=0,E=u.length,v=0;F<E;F++){v+=s[u[F]].z}var q=((v/u.length)+p)/L;if(q<0){q=0}else{if(q>255){q=255}}if(w.texture===null){q=(255-q)/255;J=w.color;A=Ceil(q*J[0]);H=Ceil(q*J[1]);K=Ceil(q*J[2]);t="rgb("+A+","+H+","+K+")"}else{q=255-Ceil(q);t="rgba(0,0,0,"+(1-(q/255))+")"}this.renderPolygon(D,y,w,t);break;case"lightsource":if(N.length===0){var I=z.thetaTo2(w.worldnormal);J=w.color;A=Ceil(I*(J[0]/PI));H=Ceil(I*(J[1]/PI));K=Ceil(I*(J[2]/PI));if(w.texture===null){t="rgb("+A+","+H+","+K+")"}else{t="rgba(0,0,0,"+(1-I*ONEOPI)+")"}this.renderPolygon(D,y,w,t)}else{A=H=K=0;for(var F=0,E=N.length,o,h;F<E;F++){o=N[F];I=PI-o.worldvector.thetaTo2(w.worldnormal);h=I*((1/o.worldvector.distance(w.worldnormal))*o.intensity)/PI;A+=(h*o.color[0]);H+=(h*o.color[1]);K+=(h*o.color[2])}if(A>1){A=1}if(H>1){H=1}if(K>1){K=1}J=w.color;var k=Ceil(A*J[0])+","+Ceil(H*J[1])+","+Ceil(K*J[2]);if(w.texture===null){t="rgb("+k+")"}else{t="rgba("+k+","+(1-(A+H+K)*0.33333)+")"}this.renderPolygon(D,y,w,t)}break}}}},renderPolygon:function d(t,l,o,s){var p=l.screencoords,n=o.vertices;t.save();if(o.texture===null){if(l.fillmode==="inflate"){var g=this.inflatePolygon(n,p);t.beginPath();t.moveTo(g[0].x,g[0].y);for(var m=1,h=n.length;m<h;m++){t.lineTo(g[m].x,g[m].y)}t.closePath()}else{t.beginPath();t.moveTo(p[n[0]].x,p[n[0]].y);for(var m=1,h=n.length;m<h;m++){t.lineTo(p[n[m]].x,p[n[m]].y)}t.closePath()}switch(l.fillmode){case"fill":t.fillStyle=s;t.fill();break;case"filltwice":t.fillStyle=s;t.fill();t.fill();break;case"inflate":t.fillStyle=s;t.fill();break;case"fillstroke":t.fillStyle=s;t.fill();t.strokeStyle=s;t.stroke();break;case"hiddenline":t.strokeStyle=s;t.stroke();break}}else{var q=l.textures[o.texture];var k=function(G,D,L,C,J,A,H){var B=this.inflatePolygon(G,p);t.save();t.beginPath();t.moveTo(B[0].x,B[0].y);for(var K=1,I=G.length;K<I;K++){t.lineTo(B[K].x,B[K].y)}t.closePath();t.clip();var O=B[0].x,x=B[0].y,N=B[1].x,w=B[1].y,M=B[2].x,v=B[2].y;var u=u=1/(D*(H-J)-C*H+A*J+(C-A)*L);var Q=-(L*(M-N)-J*M+H*N+(J-H)*O)*u,P=(J*v+L*(w-v)-H*w+(H-J)*x)*u,z=(D*(M-N)-C*M+A*N+(C-A)*O)*u,y=-(C*v+D*(w-v)-A*w+(A-C)*x)*u,F=(D*(H*N-J*M)+L*(C*M-A*N)+(A*J-C*H)*O)*u,E=(D*(H*w-J*v)+L*(C*v-A*w)+(A*J-C*H)*x)*u;t.transform(Q,P,z,y,F,E);t.drawImage(q,0,0);if(s){t.fillStyle=s;t.fill()}t.restore()};k.call(this,n.slice(0,3),0,0,q.width,0,q.width,q.height);if(n.length===4){var r=[];r.push(n[2]);r.push(n[3]);r.push(n[0]);k.call(this,r,q.width,q.height,0,q.height,0,0)}}t.restore()},inflatePolygon:function e(p,r){var s=[],l=new Array(p.length);for(var n=0,m=p.length,h,t,g,q,v,u,o;n<m;n++){h=r[p[n]].x;t=r[p[n]].y;if(n<m-1){g=r[p[n+1]].x;q=r[p[n+1]].y}else{g=r[p[0]].x;q=r[p[0]].y}v=q-t;u=-(g-h);o=Sqrt(v*v+u*u);v/=o;u/=o;v*=0.5;u*=0.5;s.push({x:h+v,y:t+u});s.push({x:g+v,y:q+u})}for(var n=0,m=p.length,k;n<m;n++){if(n===0){k=this.intersection(s[(m-1)*2],s[(m-1)*2+1],s[0],s[1])}else{k=this.intersection(s[(n-1)*2],s[(n-1)*2+1],s[n*2],s[n*2+1])}if(Abs(k.x-r[p[n]].x)>1.5||Abs(k.y-r[p[n]].y)>1.5){k.x=r[p[n]].x;k.y=r[p[n]].y}l[n]=k}return l},intersection:function f(j,i,n,m){var h,p,l,g,o,k,q;h=i.x-j.x;p=n.x-m.x;l=n.x-j.x;g=i.y-j.y;o=n.y-m.y;k=n.y-j.y;q=(p*k-o*l)/(g*p-h*o);return{x:j.x+q*(i.x-j.x),y:j.y+q*(i.y-j.y)}}})})();
/**
 * K3D demos
 *
 * Kevin Roast 26/11/09
 *
 * TODO:
 *  Demos - multiple canvas - (de)activated with a mouse click, separate interval for each, background image for each, animate by scaling and fade objects into view upon click
 *  Multiple (coloured?) lightsources - movable light sources, objs as lights.
 *  Tesselate spiral sphere
 */

var KEY = { SHIFT:16, CTRL:17, ESC:27, RIGHT:39, UP:38, LEFT:37, DOWN:40, SPACE:32,
            A:65, E:69, L:76, P:80, R:82, Z:90 };

/**
 * Global window onload handler
 */
function onloadHandler()
{
   // canvas demo areas
   var canvas1 = document.getElementById('canvas1');
   var canvas2 = document.getElementById('canvas2');
   var canvas3 = document.getElementById('canvas3');
   var canvas4 = document.getElementById('canvas4');
   var canvas5 = document.getElementById('canvas5');

   var k3dmain1 = new K3D.Controller(canvas1);
   var k3dmain2 = new K3D.Controller(canvas2);
   var k3dmain3 = new K3D.Controller(canvas3);
   var k3dmain4 = new K3D.Controller(canvas4);
   var k3dmain5 = new K3D.Controller(canvas5);


   // generate test objects

   // A snake of cubes
   for (var i=0, j=16; i<j; i++)
   {
      var obj = new K3D.K3DObject();
      obj.ophi = (360 / j) * i;
      obj.otheta = (180 / j) * i;
      with (obj)
      {
         drawmode = "wireframe";
         addgamma = 0.5; addtheta = -1.0; addphi = -0.75;
         aboutx = 85; abouty = -85; aboutz = -25;
         scale = 12;
         init(
            [{x:-1,y:1,z:-1}, {x:1,y:1,z:-1}, {x:1,y:-1,z:-1}, {x:-1,y:-1,z:-1}, {x:-1,y:1,z:1}, {x:1,y:1,z:1}, {x:1,y:-1,z:1}, {x:-1,y:-1,z:1}],
            [{a:0,b:1}, {a:1,b:2}, {a:2,b:3}, {a:3,b:0}, {a:4,b:5}, {a:5,b:6}, {a:6,b:7}, {a:7,b:4}, {a:0,b:4}, {a:1,b:5}, {a:2,b:6}, {a:3,b:7}],
            [{color:[255,0,0],vertices:[0,1,2,3]},{color:[0,255,0],vertices:[0,4,5,1]},{color:[0,0,255],vertices:[1,5,6,2]},{color:[255,255,0],vertices:[2,6,7,3]},{color:[0,255,255],vertices:[3,7,4,0]},{color:[255,0,255],vertices:[7,6,5,4]}]
         );
      }
      k3dmain1.addK3DObject(obj);
   }


   // distribute points on the surface of a sphere in a spiral
   var N = 200;
   var pts = [], edges = [];
   var s = 3.6/Math.sqrt(N);
   var len = 0;
   var dz = 2.0/N;
   var z = 1 - dz/2;
   for (var k=0; k<N; k++)
   {
      var r = Math.sqrt(1 - z*z);
      pts.push({x: Math.cos(len)*r*100, y: Math.sin(len)*r*100, z: z*100});
      if (k !== 0)
      {
         edges.push({a: k-1, b: k});
      }
      z = z - dz;
      len = len + s/r;
   }

   // points spiral sphere
   var obj1 = new K3D.K3DObject();
   with (obj1)
   {
      addgamma = 1.0; addtheta = 1.0; addphi = -0.5;
   }
   obj1.init(pts, edges, []);
   k3dmain2.addK3DObject(obj1);

   // wireframe spiral sphere
   var obj2 = new K3D.K3DObject();
   with (obj2)
   {
      drawmode = "wireframe";
      addgamma = 1.0; addtheta = -0.5; addphi = 0.25;
   }
   obj2.init(pts, edges, []);
   k3dmain4.addK3DObject(obj2);


   // Icosahedron
   // Generator code from "Tessellation of sphere" http://student.ulb.ac.be/~claugero/sphere/index.html
   var obj = new K3D.K3DObject();
   var t = (1+Math.sqrt(5))/2;
   var tau = t/Math.sqrt(1+t*t);
   var one = 1/Math.sqrt(1+t*t);
   with (obj)
   {
      drawmode = "solid";
      shademode = "lightsource";
      fillstroke = false;
      aboutx = 0; abouty = 0; aboutz = 0;
      addgamma = 0.5; addtheta = -0.4; addphi = 0.6;
      scale = 100;
      linescale = 4.0;
      init(
         [{x:tau,y:one,z:0}, {x:-tau,y:one,z:0}, {x:-tau,y:-one,z:0}, {x:tau,y:-one,z:0}, {x:one,y:0,z:tau}, {x:one,y:0,z:-tau}, {x:-one,y:0,z:-tau}, {x:-one,y:0,z:tau}, {x:0,y:tau,z:one}, {x:0,y:-tau,z:one}, {x:0,y:-tau,z:-one}, {x:0,y:tau,z:-one}],
         [{a:4,b:8}, {a:8,b:7}, {a:7,b:4}, {a:7,b:9}, {a:9,b:4}, {a:5,b:6}, {a:6,b:11}, {a:11,b:5}, {a:5,b:10}, {a:10,b:6}, {a:0,b:4}, {a:4,b:3}, {a:3,b:0}, {a:3,b:5}, {a:5,b:0}, {a:2,b:7}, {a:7,b:1}, {a:1,b:2}, {a:1,b:6}, {a:6,b:2}, {a:8,b:0}, {a:0,b:11}, {a:11,b:8}, {a:11,b:1}, {a:1,b:8}, {a:9,b:10}, {a:10,b:3}, {a:3,b:9}, {a:9,b:2}, {a:2,b:10} ],
         [{color:[255,255,255],vertices:[4, 8, 7]}, {color:[255,255,0],vertices:[4, 7, 9]}, {color:[0,255,255],vertices:[5, 6, 11]}, {color:[128,0,255],vertices:[5, 10, 6]}, {color:[0,0,255],vertices:[0, 4, 3]}, {color:[255,0,0],vertices:[0, 3, 5]}, {color:[0,255,0],vertices:[2, 7, 1]}, {color:[255,0,0],vertices:[2, 1, 6]}, {color:[128,128,128],vertices:[8, 0, 11]}, {color:[255,128,0],vertices:[8, 11, 1]}, {color:[0,128,255],vertices:[9, 10, 3]}, {color:[255,0,128],vertices:[9, 2, 10]}, {color:[0,128,255],vertices:[8, 4, 0]}, {color:[128,255,0],vertices:[11, 0, 5]}, {color:[0,255,128],vertices:[4, 9, 3]}, {color:[128,255,255],vertices:[5, 3, 10]}, {color:[255,128,255],vertices:[7, 8, 1]}, {color:[128,0,255],vertices:[6, 1, 11]}, {color:[0,255,128],vertices:[7, 2, 9]}, {color:[255,0,255],vertices:[6, 10, 2]}]
      );
   }
   k3dmain3.addK3DObject(obj);


   // tesselated sphere
   var obj = new K3D.K3DObject();
   with (obj)
   {
      drawmode = "solid";
      shademode = "lightsource";
      fillstroke = false;
      addgamma = 0.3; addtheta = 0.5; addphi = -0.4;
      ophi = 45; ogamma = 45; otheta = 45;
      scale = 100;
      linescale = 4.0;
      init(
         [{x:0.0000,y:0.0000,z:1.0000}, {x:0.0000,y:0.3827,z:0.9239}, {x:-0.1464,y:0.3536,z:0.9239},
          {x:-0.2706,y:0.2706,z:0.9239}, {x:-0.3536,y:0.1464,z:0.9239}, {x:-0.3827,y:0.0000,z:0.9239},
          {x:-0.3536,y:-0.1464,z:0.9239}, {x:-0.2706,y:-0.2706,z:0.9239}, {x:-0.1464,y:-0.3536,z:0.9239},
          {x:0.0000,y:-0.3827,z:0.9239}, {x:0.1464,y:-0.3536,z:0.9239}, {x:0.2706,y:-0.2706,z:0.9239},
          {x:0.3536,y:-0.1464,z:0.9239}, {x:0.3827,y:0.0000,z:0.9239}, {x:0.3536,y:0.1464,z:0.9239},
          {x:0.2706,y:0.2706,z:0.9239}, {x:0.1464,y:0.3536,z:0.9239}, {x:0.0000,y:0.7071,z:0.7071},
          {x:-0.2706,y:0.6533,z:0.7071}, {x:-0.5000,y:0.5000,z:0.7071}, {x:-0.6533,y:0.2706,z:0.7071},
          {x:-0.7071,y:0.0000,z:0.7071}, {x:-0.6533,y:-0.2706,z:0.7071}, {x:-0.5000,y:-0.5000,z:0.7071},
          {x:-0.2706,y:-0.6533,z:0.7071}, {x:0.0000,y:-0.7071,z:0.7071}, {x:0.2706,y:-0.6533,z:0.7071},
          {x:0.5000,y:-0.5000,z:0.7071}, {x:0.6533,y:-0.2706,z:0.7071}, {x:0.7071,y:0.0000,z:0.7071},
          {x:0.6533,y:0.2706,z:0.7071}, {x:0.5000,y:0.5000,z:0.7071}, {x:0.2706,y:0.6533,z:0.7071},
          {x:0.0000,y:0.9239,z:0.3827}, {x:-0.3536,y:0.8536,z:0.3827}, {x:-0.6533,y:0.6533,z:0.3827},
          {x:-0.8536,y:0.3536,z:0.3827}, {x:-0.9239,y:0.0000,z:0.3827}, {x:-0.8536,y:-0.3536,z:0.3827},
          {x:-0.6533,y:-0.6533,z:0.3827}, {x:-0.3536,y:-0.8536,z:0.3827}, {x:0.0000,y:-0.9239,z:0.3827},
          {x:0.3536,y:-0.8536,z:0.3827}, {x:0.6533,y:-0.6533,z:0.3827}, {x:0.8536,y:-0.3536,z:0.3827},
          {x:0.9239,y:0.0000,z:0.3827}, {x:0.8536,y:0.3536,z:0.3827}, {x:0.6533,y:0.6533,z:0.3827},
          {x:0.3536,y:0.8536,z:0.3827}, {x:0.0000,y:1.0000,z:0.0000}, {x:-0.3827,y:0.9239,z:0.0000},
          {x:-0.7071,y:0.7071,z:0.0000}, {x:-0.9239,y:0.3827,z:0.0000}, {x:-1.0000,y:0.0000,z:0.0000},
          {x:-0.9239,y:-0.3827,z:0.0000}, {x:-0.7071,y:-0.7071,z:0.0000}, {x:-0.3827,y:-0.9239,z:0.0000},
          {x:0.0000,y:-1.0000,z:0.0000}, {x:0.3827,y:-0.9239,z:0.0000}, {x:0.7071,y:-0.7071,z:0.0000},
          {x:0.9239,y:-0.3827,z:0.0000}, {x:1.0000,y:0.0000,z:0.0000}, {x:0.9239,y:0.3827,z:0.0000},
          {x:0.7071,y:0.7071,z:0.0000}, {x:0.3827,y:0.9239,z:0.0000}, {x:0.0000,y:0.9239,z:-0.3827},
          {x:-0.3536,y:0.8536,z:-0.3827}, {x:-0.6533,y:0.6533,z:-0.3827}, {x:-0.8536,y:0.3536,z:-0.3827},
          {x:-0.9239,y:0.0000,z:-0.3827}, {x:-0.8536,y:-0.3536,z:-0.3827}, {x:-0.6533,y:-0.6533,z:-0.3827},
          {x:-0.3536,y:-0.8536,z:-0.3827}, {x:0.0000,y:-0.9239,z:-0.3827}, {x:0.3536,y:-0.8536,z:-0.3827},
          {x:0.6533,y:-0.6533,z:-0.3827}, {x:0.8536,y:-0.3536,z:-0.3827}, {x:0.9239,y:0.0000,z:-0.3827},
          {x:0.8536,y:0.3536,z:-0.3827}, {x:0.6533,y:0.6533,z:-0.3827}, {x:0.3536,y:0.8536,z:-0.3827},
          {x:0.0000,y:0.7071,z:-0.7071}, {x:-0.2706,y:0.6533,z:-0.7071}, {x:-0.5000,y:0.5000,z:-0.7071},
          {x:-0.6533,y:0.2706,z:-0.7071}, {x:-0.7071,y:0.0000,z:-0.7071}, {x:-0.6533,y:-0.2706,z:-0.7071},
          {x:-0.5000,y:-0.5000,z:-0.7071}, {x:-0.2706,y:-0.6533,z:-0.7071}, {x:0.0000,y:-0.7071,z:-0.7071},
          {x:0.2706,y:-0.6533,z:-0.7071}, {x:0.5000,y:-0.5000,z:-0.7071}, {x:0.6533,y:-0.2706,z:-0.7071},
          {x:0.7071,y:0.0000,z:-0.7071}, {x:0.6533,y:0.2706,z:-0.7071}, {x:0.5000,y:0.5000,z:-0.7071},
          {x:0.2706,y:0.6533,z:-0.7071}, {x:0.0000,y:0.3827,z:-0.9239}, {x:-0.1464,y:0.3536,z:-0.9239},
          {x:-0.2706,y:0.2706,z:-0.9239}, {x:-0.3536,y:0.1464,z:-0.9239}, {x:-0.3827,y:0.0000,z:-0.9239},
          {x:-0.3536,y:-0.1464,z:-0.9239}, {x:-0.2706,y:-0.2706,z:-0.9239}, {x:-0.1464,y:-0.3536,z:-0.9239},
          {x:0.0000,y:-0.3827,z:-0.9239}, {x:0.1464,y:-0.3536,z:-0.9239}, {x:0.2706,y:-0.2706,z:-0.9239},
          {x:0.3536,y:-0.1464,z:-0.9239}, {x:0.3827,y:0.0000,z:-0.9239}, {x:0.3536,y:0.1464,z:-0.9239},
          {x:0.2706,y:0.2706,z:-0.9239}, {x:0.1464,y:0.3536,z:-0.9239}, {x:0.0000,y:0.0000,z:-1.0000} ],
         [],
         [{vertices:[0,1,2]}, {vertices:[0,2,3]}, {vertices:[0,3,4]}, {vertices:[0,4,5]}, {vertices:[0,5,6]}, {vertices:[0,6,7]}, {vertices:[0,7,8]}, {vertices:[0,8,9]}, {vertices:[0,9,10]},
          {vertices:[0,10,11]}, {vertices:[0,11,12]}, {vertices:[0,12,13]}, {vertices:[0,13,14]}, {vertices:[0,14,15]}, {vertices:[0,15,16]}, {vertices:[0,16,1]}, {vertices:[1,17,18,2]},
          {vertices:[2,18,19,3]}, {vertices:[3,19,20,4]}, {vertices:[4,20,21,5]}, {vertices:[5,21,22,6]}, {vertices:[6,22,23,7]},
          {vertices:[7,23,24,8]}, {vertices:[8,24,25,9]}, {vertices:[9,25,26,10]}, {vertices:[10,26,27,11]},
          {vertices:[11,27,28,12]}, {vertices:[12,28,29,13]}, {vertices:[13,29,30,14]}, {vertices:[14,30,31,15]}, {vertices:[15,31,32,16]},
          {vertices:[16,32,17,1]}, {vertices:[17,33,34,18]}, {vertices:[18,34,35,19]}, {vertices:[19,35,36,20]},
          {vertices:[20,36,37,21]}, {vertices:[21,37,38,22]}, {vertices:[22,38,39,23]}, {vertices:[23,39,40,24]}, {vertices:[24,40,41,25]},
          {vertices:[25,41,42,26]}, {vertices:[26,42,43,27]}, {vertices:[27,43,44,28]}, {vertices:[28,44,45,29]},
          {vertices:[29,45,46,30]}, {vertices:[30,46,47,31]}, {vertices:[31,47,48,32]}, {vertices:[32,48,33,17]},
          {vertices:[33,49,50,34]}, {vertices:[34,50,51,35]}, {vertices:[35,51,52,36]}, {vertices:[36,52,53,37]}, {vertices:[37,53,54,38]},
          {vertices:[38,54,55,39]}, {vertices:[39,55,56,40]}, {vertices:[40,56,57,41]}, {vertices:[41,57,58,42]}, {vertices:[42,58,59,43]},
          {vertices:[43,59,60,44]}, {vertices:[44,60,61,45]}, {vertices:[45,61,62,46]}, {vertices:[46,62,63,47]},
          {vertices:[47,63,64,48]}, {vertices:[48,64,49,33]},
          {vertices:[49,65,66,50]}, {vertices:[50,66,67,51]}, {vertices:[51,67,68,52]},
          {vertices:[52,68,69,53]}, {vertices:[53,69,70,54]}, {vertices:[54,70,71,55]}, {vertices:[55,71,72,56]},
          {vertices:[56,72,73,57]}, {vertices:[57,73,74,58]}, {vertices:[58,74,75,59]}, {vertices:[59,75,76,60]}, {vertices:[60,76,77,61]},
          {vertices:[61,77,78,62]}, {vertices:[62,78,79,63]}, {vertices:[63,79,80,64]}, {vertices:[64,80,65,49]},
          {vertices:[65,81,82,66]}, {vertices:[66,82,83,67]}, {vertices:[67,83,84,68]}, {vertices:[68,84,85,69]}, {vertices:[69,85,86,70]},
          {vertices:[70,86,87,71]}, {vertices:[71,87,88,72]}, {vertices:[72,88,89,73]}, {vertices:[73,89,90,74]},
          {vertices:[74,90,91,75]}, {vertices:[75,91,92,76]}, {vertices:[76,92,93,77]}, {vertices:[77,93,94,78]}, {vertices:[78,94,95,79]},
          {vertices:[79,95,96,80]}, {vertices:[80,96,81,65]}, {vertices:[81,97,98,82]}, {vertices:[82,98,99,83]},
          {vertices:[83,99,100,84]}, {vertices:[84,100,101,85]}, {vertices:[85,101,102,86]}, {vertices:[86,102,103,87]}, {vertices:[87,103,104,88]},
          {vertices:[88,104,105,89]}, {vertices:[89,105,106,90]}, {vertices:[90,106,107,91]}, {vertices:[91,107,108,92]},
          {vertices:[92,108,109,93]}, {vertices:[93,109,110,94]}, {vertices:[94,110,111,95]}, {vertices:[95,111,112,96]}, {vertices:[96,112,97,81]},
          {vertices:[113,98,97]}, {vertices:[113,99,98]}, {vertices:[113,100,99]}, {vertices:[113,101,100]}, {vertices:[113,102,101]}, {vertices:[113,103,102]}, {vertices:[113,104,103]}, {vertices:[113,105,104]},
          {vertices:[113,106,105]}, {vertices:[113,107,106]}, {vertices:[113,108,107]}, {vertices:[113,109,108]}, {vertices:[113,110,109]}, {vertices:[113,111,110]}, {vertices:[113,112,111]}, {vertices:[113,97,112]} ]
         );
   }
   k3dmain5.addK3DObject(obj);


   // add lightsource for solid object demo
   var light = new K3D.LightSource({x:70,y:70,z:-70}, [0.0,0.75,1.0], 70.0);
   light.addgamma = 2.5;
   k3dmain5.addLightSource(light);
   light = new K3D.LightSource({x:-50,y:-50,z:-70}, [1.0,1.0,0.0], 70.0);
   light.addgamma = 1.5;
   k3dmain5.addLightSource(light);
   // add an object to represent the lightsource so it is visible in the scene
   var lightObj = new K3D.K3DObject();
   with (lightObj)
   {
      color = [0,192,255];
      drawmode = "point";
      shademode = "plain";
      addgamma = 2.5;
      linescale = 16.0;
      init([{x:70,y:70,z:-70}], [], []);
   }
   k3dmain5.addK3DObject(lightObj);
   lightObj = new K3D.K3DObject();
   with (lightObj)
   {
      color = [255,255,0];
      drawmode = "point";
      shademode = "plain";
      addgamma = 1.5;
      linescale = 16.0;
      init([{x:-50,y:-50,z:-70}], [], []);
   }
   k3dmain5.addK3DObject(lightObj);

   // render first frames
   k3dmain1.frame();
   // use motion blur background fill
   //k3dmain2.fillStyle = "rgba(0,0,0, 0.50)";
   k3dmain2.frame();
   k3dmain3.frame();
   //k3dmain4.fillStyle = "rgba(0,0,0, 0.50)";
   k3dmain4.frame();
   k3dmain5.frame();

   // start main demo
   k3dmain1.paused = false;
   k3dmain1.frame();
}

var RAD=Math.PI/180;var PI=Math.PI;var TWOPI=Math.PI*2;var ONEOPI=1/Math.PI;var PIO2=Math.PI/2;var PIO4=Math.PI/4;var PIO8=Math.PI/8;var PIO16=Math.PI/16;var PIO32=Math.PI/32;var Rnd=Math.random;var Sin=Math.sin;var Cos=Math.cos;var Sqrt=Math.sqrt;var Floor=Math.floor;var Atan2=Math.atan2;var Ceil=Math.ceil;var Abs=Math.abs;function randomInt(a,b){return ~~(Rnd()*(b-a+1)+a)}function weightedRandom(b){var a=Rnd();if(a<0.5){return 1-Math.pow(1-a,b!==undefined?b:2)/2}return 0.5+Math.pow((a-0.5)*2,b!==undefined?b:2)/2}function calcNormalVector(b,d,f,a,c,e){return new Vector3D((d*e)-(f*c),-((e*b)-(a*f)),(b*c)-(d*a)).norm()}function extend(d,e,c){var b=function(){},a;b.prototype=e.prototype;d.prototype=new b();d.prototype.constructor=d;d.superclass=e.prototype;if(e.prototype.constructor==Object.prototype.constructor){e.prototype.constructor=e}if(c){for(a in c){if(c.hasOwnProperty(a)){d.prototype[a]=c[a]}}}}function isArray(a){return(a.constructor.toString().indexOf("Array")!==-1)}(function(){Vector=function(x,y){this.x=x;this.y=y;return this};Vector.prototype={x:0,y:0,clone:function(){return new Vector(this.x,this.y)},set:function(v){this.x=v.x;this.y=v.y;return this},add:function(v){this.x+=v.x;this.y+=v.y;return this},nadd:function(v){return new Vector(this.x+v.x,this.y+v.y)},sub:function(v){this.x-=v.x;this.y-=v.y;return this},nsub:function(v){return new Vector(this.x-v.x,this.y-v.y)},dot:function(v){return this.x*v.x+this.y*v.y},length:function(){return Sqrt(this.x*this.x+this.y*this.y)},distance:function(v){var xx=this.x-v.x,yy=this.y-v.y;return Sqrt(xx*xx+yy*yy)},theta:function(){return Atan2(this.y,this.x)},thetaTo:function(vec){var v=this.clone().norm(),w=vec.clone().norm();return Math.acos(v.dot(w))},thetaTo2:function(vec){return Atan2(vec.y,vec.x)-Atan2(this.y,this.x)},norm:function(){var len=this.length();this.x/=len;this.y/=len;return this},nnorm:function(){var len=this.length();return new Vector(this.x/len,this.y/len)},rotate:function(a){var ca=Cos(a),sa=Sin(a);with(this){var rx=x*ca-y*sa,ry=x*sa+y*ca;x=rx;y=ry}return this},nrotate:function(a){var ca=Cos(a),sa=Sin(a);return new Vector(this.x*ca-this.y*sa,this.x*sa+this.y*ca)},invert:function(){this.x=-this.x;this.y=-this.y;return this},ninvert:function(){return new Vector(-this.x,-this.y)},scale:function(s){this.x*=s;this.y*=s;return this},nscale:function(s){return new Vector(this.x*s,this.y*s)},scaleTo:function(s){var len=s/this.length();this.x*=len;this.y*=len;return this},nscaleTo:function(s){var len=s/this.length();return new Vector(this.x*len,this.y*len)}}})();(function(){Vector3D=function(a,c,b){this.x=a;this.y=c;this.z=b;return this};Vector3D.prototype={x:0,y:0,z:0,clone:function(){return new Vector3D(this.x,this.y,this.z)},set:function(a){this.x=a.x;this.y=a.y;this.z=a.z;return this},add:function(a){this.x+=a.x;this.y+=a.y;this.z+=a.z;return this},sub:function(a){this.x-=a.x;this.y-=a.y;this.z-=a.z;return this},dot:function(a){return this.x*a.x+this.y*a.y+this.z*a.z},cross:function(a){return new Vector3D(this.y*a.z-this.z*a.y,this.z*a.x-this.x*a.z,this.x*a.y-this.y*a.x)},length:function(){return Sqrt(this.x*this.x+this.y*this.y+this.z*this.z)},distance:function(b){var c=this.x-b.x,d=this.y-b.y,a=this.z-b.z;return Sqrt(c*c+d*d+a*a)},thetaTo:function(b){var a=this.y*b.z-this.z*b.y,d=this.z*b.x-this.x*b.z,c=this.x*b.y-this.y*b.x;return Atan2(Sqrt(a*a+d*d+c*c),this.dot(b))},thetaTo2:function(a){return Math.acos(this.dot(a)/(Sqrt(this.x*this.x+this.y*this.y+this.z*this.z)*Sqrt(a.x*a.x+a.y*a.y+a.z*a.z)))},norm:function(){var a=this.length();this.x/=a;this.y/=a;this.z/=a;return this},scale:function(a){this.x*=a;this.y*=a;this.z*=a;return this}}})();(function(){Preloader=function(){this.images=new Array();return this};Preloader.prototype={images:null,callback:null,counter:0,addImage:function b(c,d){var e=this;c.url=d;c.onload=function(){e.counter++;if(e.counter===e.images.length){e.callback.call(e)}};this.images.push(c)},onLoadCallback:function a(e){this.counter=0;this.callback=e;for(var d=0,c=this.images.length;d<c;d++){this.images[d].src=this.images[d].url}}}})();

function Vector3(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
}

Vector3.prototype.mag = function() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
}

Vector3.prototype.distance = function(vec) {
    if (vec instanceof Vector3)
        return Math.sqrt((this.x - vec.x) * (this.x - vec.x) + (this.y - vec.y) * (this.y - vec.y) + (this.z - vec.z) * (this.z - vec.z));
}

Vector3.prototype.add = function(vec) {
    if (vec instanceof Vector3) {
        this.x += vec.x;
        this.y += vec.y;
        this.z += vec.z;
    }
    return this;
}

Vector3.prototype.subtract = function(vec) {
    if (vec instanceof Vector3) {
        this.x -= vec.x;
        this.y -= vec.y;
        this.z -= vec.z;
    }
    return this;
}

Vector3.prototype.multiply = function(n) {
    this.x *= n;
    this.y *= n;
    this.z *= n;
    return this;
}

Vector3.prototype.divide = function(n) {
    if (n != 0) {
        this.multiply(1 / n);
    }
    return this;
}

Vector3.prototype.clone = function() {
    return new Vector3(this.x, this.y, this.z);
}

Vector3.prototype.normalize = function() {
    this.divide(this.mag());
    return this;
}

Vector3.cross = function(vec1, vec2) {
    if (vec1 instanceof Vector3 && vec2 instanceof Vector3) {
        var x = vec1.y * vec2.z - vec1.z * vec2.y;
        var y = vec1.z * vec2.x - vec1.x * vec2.z;
        var z = vec1.x * vec2.y - vec1.y * vec2.x;
        return new Vector3(x, y, z);
    }
}

Vector3.dot = function(vec1, vec2) {
    if (vec1 instanceof Vector3 && vec2 instanceof Vector3) {
        return vec1.x * vec2.x + vec1.y * vec2.y + vec1.z * vec2.z;
    }
}

function Matrix3() {
    this.data = [];
    for (var i = 0; i < 9; i++) {
        this.data[i] = 0;
    }
}

Matrix3.prototype.setIdentity = function() {
    this.data[0 + 0 * 3] = 1;
    this.data[1 + 1 * 3] = 1;
    this.data[2 + 2 * 3] = 1;
}

Matrix3.prototype.multiplyVector = function(vec) {
    if (vec instanceof Vector3) {
        var x = this.data[0 + 0 * 3] * vec.x + this.data[1 + 0 * 3] * vec.y + this.data[2 + 0 * 3] * vec.z;
        var y = this.data[0 + 1 * 3] * vec.x + this.data[1 + 1 * 3] * vec.y + this.data[2 + 1 * 3] * vec.z;
        var z = this.data[0 + 2 * 3] * vec.x + this.data[1 + 2 * 3] * vec.y + this.data[2 + 2 * 3] * vec.z;

        return new Vector3(x, y, z);
    }
}

Matrix3.prototype.multiplyMatrix = function(mat) {
    if (mat instanceof Matrix3) {
        var result = new Matrix3();
        for (var y = 0; y < 3; y++) {
            for (var x = 0; x < 3; x++) {
                var sum = 0;
                for (var e = 0; e < 3; e++) {
                    sum += this.data[y + e * 3] * mat.data[e + x * 3];
                }
                result.data[y + x * 3] = sum;
            }
        }
        return result;
    }
}

Matrix3.rotate = function(angle, x, y, z) {
    var result = new Matrix3();
    result.setIdentity();

    var cos = Math.cos(angle);
    var sin = Math.sin(angle);
    var omc = 1 - cos;

    result.data[0 + 0 * 3] = x * omc + cos;
    result.data[0 + 1 * 3] = y * x * omc + z * sin;
    result.data[0 + 2 * 3] = x * z * omc - y * sin;

    result.data[1 + 0 * 3] = x * y * omc - z * sin;
    result.data[1 + 1 * 3] = y * omc + cos;
    result.data[1 + 2 * 3] = y * z * omc + x * sin;

    result.data[2 + 0 * 3] = x * z * omc + y * sin;
    result.data[2 + 1 * 3] = y * z * omc - x * sin;
    result.data[2 + 2 * 3] = z * omc + cos;

    return result;
}

function Triangle(pos1, pos2, pos3, scale) {
  this.pos1 = pos1.normalize().multiply(scale);
  this.pos2 = pos2.normalize().multiply(scale);
  this.pos3 = pos3.normalize().multiply(scale);
  this.scale = scale;

  var v1 = this.pos1.clone().subtract(this.pos2);
  var v2 = this.pos3.clone().subtract(this.pos2);

  this.avg = this.pos1.clone().add(this.pos2).add(this.pos3).divide(3);

  this.normal = Vector3.cross(v2, v1);
  this.normal.normalize();
}

Triangle.prototype.draw = function(perspectiveFactor, light, ctx) {
  var proj1 = (this.pos1.z + perspectiveFactor) / perspectiveFactor;
  var proj2 = (this.pos2.z + perspectiveFactor) / perspectiveFactor;
  var proj3 = (this.pos3.z + perspectiveFactor) / perspectiveFactor;

  var brightness = Math.floor(Vector3.dot(this.normal, light) * 20 + 10);
  var color = "hsl(0, 0%, " + brightness + "%)";

  ctx.fillStyle = color;
  ctx.strokeStyle = color;
  ctx.beginPath();
  ctx.lineTo(this.pos1.x / proj1, this.pos1.y / proj1);
  ctx.lineTo(this.pos2.x / proj2, this.pos2.y / proj2);
  ctx.lineTo(this.pos3.x / proj3, this.pos3.y / proj3);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
}

Triangle.prototype.rotate = function(x, y, z) {
  var rotX = Matrix3.rotate(x, 1, 0, 0);
  var rotY = Matrix3.rotate(y, 0, 1, 0);
  var rotZ = Matrix3.rotate(z, 0, 0, 1);

  var rot = rotZ.multiplyMatrix(rotY.multiplyMatrix(rotX));
  this.pos1 = rot.multiplyVector(this.pos1);
  this.pos2 = rot.multiplyVector(this.pos2);
  this.pos3 = rot.multiplyVector(this.pos3);

  this.avg = this.pos1.clone().add(this.pos2).add(this.pos3).divide(3);

  var v1 = this.pos1.clone().subtract(this.pos2);
  var v2 = this.pos3.clone().subtract(this.pos2);

  this.normal = Vector3.cross(v2, v1);
  this.normal.normalize();
};

Triangle.prototype.subdivide = function() {
  var v12 = new Vector3(0, 0, 0);
  var v23 = new Vector3(0, 0, 0);
  var v31 = new Vector3(0, 0, 0);

  var prop = ["x", "y", "z"]

  for (var i = 0; i < 3; i++) {
    var p = prop[i];
    v12[p] = this.pos1[p] + this.pos2[p];
    v23[p] = this.pos2[p] + this.pos3[p];
    v31[p] = this.pos3[p] + this.pos1[p];
  }

  v12.normalize().multiply(this.scale);
  v23.normalize().multiply(this.scale);
  v31.normalize().multiply(this.scale);

  return [
    new Triangle(this.pos1, v12, v31, this.scale),
    new Triangle(this.pos2, v23, v12, this.scale),
    new Triangle(this.pos3, v31, v23, this.scale),
    new Triangle(v12, v23, v31, this.scale)
  ];
};

var icosahedron = new function() {

  var c, ctx;
  var size = 350;

  var perspectiveFactor = 400;

  var triangles = [];
  var scale = 150;

  var light = new Vector3(1, 1, 1).normalize();

  var X = 0.525731112119133606;
  var Z = 0.85065080835203993;

  vertices = [
    [-X, 0.0, Z],
    [X, 0.0, Z],
    [-X, 0.0, -Z],
    [X, 0.0, -Z],
    [0.0, Z, X],
    [0.0, Z, -X],
    [0.0, -Z, X],
    [0.0, -Z, -X],
    [Z, X, 0.0],
    [-Z, X, 0.0],
    [Z, -X, 0.0],
    [-Z, -X, 0.0]
  ];

  indices = [
    [0, 4, 1],
    [0, 9, 4],
    [9, 5, 4],
    [4, 5, 8],
    [4, 8, 1],
    [8, 10, 1],
    [8, 3, 10],
    [5, 3, 8],
    [5, 2, 3],
    [2, 7, 3],
    [7, 10, 3],
    [7, 6, 10],
    [7, 11, 6],
    [11, 0, 6],
    [0, 1, 6],
    [6, 1, 10],
    [9, 0, 11],
    [9, 11, 2],
    [9, 2, 5],
    [7, 2, 11]
  ];

  function main() {
    c = document.getElementById("icosahedron");
    c.width = size;
    c.height = size;
    ctx = c.getContext("2d");

    ctx.translate(size / 2, size / 2);

    for (var i = 0; i < indices.length; i++) {
      var ind = indices[i];
      triangles.push(new Triangle(
        new Vector3(vertices[ind[0]][0], vertices[ind[0]][1], vertices[ind[0]][2]),
        new Vector3(vertices[ind[1]][0], vertices[ind[1]][1], vertices[ind[1]][2]),
        new Vector3(vertices[ind[2]][0], vertices[ind[2]][1], vertices[ind[2]][2]),
        scale
      ));
    }
    loop();
  }

  function loop() {
    update();
    render();
    requestAnimationFrame(loop);
  }

  function update() {
    for (var i = 0; i < triangles.length; i++) {
      var a = Math.PI / 180;
      triangles[i].rotate(a / 4, a, a / 2);
    }

    triangles.sort(function(a, b) {
      return b.avg.z - a.avg.z;
    })
  }

  function render() {
    ctx.clearRect(-size / 2, -size / 2, size, size);

    for (var i = 0; i < triangles.length; i++) {
      triangles[i].draw(perspectiveFactor, light, ctx);
    }
  }

  this.subdivide = function() {
    var newTriangles = [];
    for (var i = 0; i < triangles.length; i++) {
      newTriangles = newTriangles.concat(triangles[i].subdivide());
    }
    triangles = newTriangles;
    console.log(triangles.length);
  }

  main();
}
