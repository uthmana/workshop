
/* ======= Model ======= */

const model = {
    activeLink: null,
    listItems: [
        {
            id : 1,
            linkName : 'Menu',
            banner : 'img/contBcg-2.jpeg',
            contentCateg : [
			    {
					id : 1,
					imgSrc : 'img/contBcg-3.jpeg',
					
                },
			    {
					id : 2,
					imgSrc : 'img/contBcg-3.jpeg',
					
                },
				{
					id : 3,
					imgSrc : 'img/contBcg-3.jpeg',
					
                },
				{
					id : 4,
					imgSrc : 'img/contBcg-3.jpeg',
					
                },
			]
        },
		{
            id : 2,
            linkName : 'Menu',
            banner : 'img/contBcg-3.jpeg',
            contentCateg : [
			    {
					id : 1,
					imgSrc : 'img/contBcg-2.jpeg',
					
                },
			    {
					id : 2,
					imgSrc : 'img/contBcg-2.jpeg',
					
                },
				{
					id : 3,
					imgSrc : 'img/contBcg-2.jpeg',
					
                },
				{
					id : 4,
					imgSrc : 'img/contBcg-2.jpeg',
					
                },
			]
        },
		{
            id : 3,
            linkName : 'Home',
            banner : 'img/contBcg-3.jpeg',
            contentCateg : [
			    {
					id : 1,
					imgSrc : 'img/contBcg-2.jpeg',
					
                },
				{
					id : 2,
					imgSrc : 'img/contBcg-2.jpeg',
					
                },
				{
					id : 3,
					imgSrc : 'img/contBcg-2.jpeg',
					
                }
			
			]
        },
		{
            id : 4,
            linkName : 'Menu',
            banner : 'img/contBcg-3.jpeg',
            contentCateg : [
			    {
					id : 1,
					imgSrc : 'img/contBcg-2.jpeg',
					
                },
				{
					id : 2,
					imgSrc : 'img/contBcg-2.jpeg',
					
                }
			
			]
        },
		{
            id : 5,
            linkName : 'Menu',
            banner : 'img/contBcg-3.jpeg',
            contentCateg : [
			    {
					id : 1,
					imgSrc : 'img/contBcg-2.jpeg',
					
                }
			
			]
        }
        
    ]
};


const controls = {

    init: function() {
        // set our current list to the first one in the list
        model.activeLink = model.listItems[0];

        // tell our views to initialize
        listItemsView.init();
        contentCategsView.init();
    },

    getActiveLink: function() {
        return model.activeLink;
    },
	
	

    getallList: function() {
        return model.listItems;
    },

    // set the currently-selected listItem to the object passed in
       setCurrentContent: function(listItem) {
       return model.activeLink = listItem;
    }

 
	
};


/* ======= View ======= */

const contentCategsView = {

    init: function() {
        // store pointers to our DOM elements for easy access later
        this.contentWraper = document.getElementById('contentWraper');
        this.bannerImg = document.getElementById('bannerImg');
        this.contentBox = document.getElementById('contentBox');
        this.cardElems = document.querySelectorAll('.card');

        
		this.cardElems.forEach(function(cardElem){
			cardElem.addEventListener('click', function(){
            controls.showAlert();  });
			
		});
		
		

        // render this view (update the DOM elements with the right values)
        this.render();
    },

    render: function() {
        // update the DOM elements with values from the current list
		let activeLink = controls.getActiveLink();
        this.bannerImg.src = activeLink.banner;
        let cardlist= "";
		for(let i=0; i < activeLink.contentCateg.length; i++){
			 cardlist += `<div class="card">
		  <img src="${activeLink.contentCateg[i].imgSrc}" id="${activeLink.contentCateg[i].id}" alt="Denim Jeans" style="width:100%">
		  
		</div>`;
		};
		 this.contentBox.innerHTML= cardlist;
      
    }
};









const listItemsView = {

    init: function() {
        // store the DOM element for easy access later
        this.menulist = document.getElementById('menu-list');

        // render this view (update the DOM elements with the right values)
        this.render();
    },

 	
	 render: function() {
        let list , elem, i;
        // get the list we'll be rendering from the control
        let lists = controls.getallList();

        // empty the link list
        this.menulist.innerHTML = '';

        // loop over the lists
        for (i = 0; i < lists.length; i++) {
            // this is the list we're currently looping over
            list = lists[i];

            // make a new  list item and set its values
            elem = document.createElement('a');
			elem.classList.add('listItem');
			elem.href = '#'+list.linkName;
			elem.id = list.id;
            elem.textContent = list.linkName;

            // on click, setCurrentlist and render the content Categories View
        
            elem.addEventListener('click', (function(listCopy) {
                return function() {
					
                    controls.setCurrentContent(listCopy);
                    contentCategsView.render();
					
                };
			})(list));

         // finally, add the element to the list
            this.menulist.appendChild(elem);
			
			//show active class
			
				const items = document.querySelectorAll('.listItem');
			    items.forEach(function(item){
					items[0].classList.add('active');
					item.addEventListener('click',function(e){
						
				  for (i = 0; i < items.length; i++) {
				  if (items[i].classList.contains('active')){
					items[i].classList.remove('active');
				  }else {
				  e.target.classList.add('active');
				
				  }
				}
						
					});
					
		// arrow keys control
		const sidebar = document.querySelector('.sidebar');
		const contentwidth = document.querySelector('.content');
		const linkItems = document.querySelectorAll('a');
			let active_id = '1';
			Element = document.getElementById(active_id);
			Element.classList.add('active');

			  document.onkeyup = KeyCheck;

			function KeyCheck(e) {
				let old_id = active_id;
				let Key = (window.event) ? event.keyCode : e.keyCode;
				switch (Key) {
					case 40:
						active_id++;
						if (active_id < items.length) active_id += items.length;
						break;
					case 38:
						active_id--;
						break;
					case 13:
						linkItems.forEach(function(linkItem){
							if(linkItem.classList.contains('active')){
								linkItem.click();
							}
						});
						break;
					case 39:		 
						sidebar.classList.toggle("hide");
					    contentwidth.classList.toggle("w-100");
						break;
					case 37: 
						sidebar.classList.toggle("hide");
					    contentwidth.classList.toggle("w-100");
						break;
                    						
				}
				
			if (active_id > items.length) active_id -= items.length;
				New = document.getElementById(active_id);
				
				 for (i = 0; i < items.length; i++) {
				// check if the link is active
				  if (items[i].classList.contains('active')){
					items[i].classList.remove('active');
				  }else {
				  e.target.classList.add('active');
				  
				  }
				 
				}
				
				New.classList.add('active');
	
			};				

				});
			

        }
    }
	
	
	
};

controls.init();