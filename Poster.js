AFRAME.registerComponent("poster",{
    init:function(){
        this.posterContainer = this.el;
        this.creatCards();
        
    },

    creatCards:function(){
        
        const PostersRef = [
            {
                id : "superman",
                url:"./assets/superman_comic.jpeg"
            },
            {
                id : "spiderman",
                url:"./assets/spiderman_comic.jpeg"
            },
            {
                id : "outer-space",
                url:"./assets/outerspace_comic.jpeg"
            },
            {
                id : "captain-aero",
                url:"./assets/captainaero_comic.jpeg"
            },
        ];
        let prevoiusXPosition = -60;
        
    for (var item of PostersRef) {
      const posX = prevoiusXPosition + 25;
      const posY = 10;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      prevoiusXPosition = posX;
      borderEl = this.createBorders(position,item.id);
      posterEl = this.createPosters(item);
      borderEl.appendChild(posterEl);
      this.posterContainer.appendChild(borderEl);

    }
    },

    createBorders:function(position,id){
        console.log("hiii");
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("id",id);
        entityEl.setAttribute("visible",true);
        entityEl.setAttribute("geometry",{
            primitive: "plane",
            width: 20,
            height: 40
        });

        entityEl.setAttribute("position",position);
        entityEl.setAttribute("material",{color:"white"});
        return entityEl;
    },

    createPosters:function(item){
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("visible",true);
        entityEl.setAttribute("geometry",{
            primitive: "plane",
            width: 20,
            height: 28
        });

        entityEl.setAttribute("position",{x:0 , y:5 , z:0.1});
        entityEl.setAttribute("material",{src:item.url});
        return entityEl;
    }
})