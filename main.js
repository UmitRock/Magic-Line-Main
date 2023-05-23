let maker = document.querySelector('#make');
        let list = document.querySelectorAll('ul li');

        function movehover(e){
            maker.style.left = e.offsetLeft + "px";
            maker. style.width = e.offsetWidth + "px";
        }

        list.forEach(link => {
            link.addEventListener("mousemove", (e) => {
                movehover(e.target);
            });
        });

        function activeLink(){
            list.forEach((item) => {
                item.classList.remove("active");
                this.classList.add("active");
            })
        }

        list.forEach((item) =>{
            item.addEventListener("mousemove", activeLink)
        })