    const imagess = ["one.jpg","2.jpg","3.jpg","5.jpg","4.jpg"];
        let currentIndex = 0;
        function changes(){
            currentIndex = (currentIndex + 1) % imagess.length;
            myFunction(imagess[currentIndex]);
        }

        function myFunction(v){
            document.getElementById("image").src = v;
        }