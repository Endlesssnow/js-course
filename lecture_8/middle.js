let inputs = document.querySelectorAll('input');
let map = new Map;

for (let input of inputs) {
    input.setAttribute("lustKeyPress", "0");
    map.set(input, { values: [], key: - 1 });

    input.addEventListener('blur', function () {
        let { values, key } = map.get(this);
        input.setAttribute("lustKeyPress", "0");
      
        if(key < values.length - 1) {
          values.splice(key, values.length - key);
          key--;
        }
      
        map.set(this, { values, key: key + 1 });
        values.push(this.value);
        this.value = '';
        console.log(map.get(this));
    });

    input.addEventListener('keydown', function (event) {
        // ArrowLeft
        if (event.key == 'ArrowLeft') {
            event.preventDefault();
            let { values, key } = map.get(this);

            if (key > 0) {
                if (input.getAttribute('lustKeyPress') === "0") {
                    this.value = values[key];
                    //console.log(map.get(this));
                    // console.log(key);
                } else {
                    key--;
                    map.set(this, { values, key: key });
                    this.value = values[key];
                    //console.log(map.get(this));
                }

                input.setAttribute("lustKeyPress", "ArrowLeft");

            } else if (key === 0) {
                this.value = values[key];
                input.setAttribute("lustKeyPress", "ArrowLeft");
                //console.log(map.get(this));
            }
        }
        //ArrowRight
        if (event.key == 'ArrowRight') {
            event.preventDefault();
            let { values, key } = map.get(this);

            if (key < values.length - 1) {
                key++;
                map.set(this, { values, key: key });
                this.value = values[key];
                // console.log(key);
                // console.log(map.get(this));
                input.setAttribute("lustKeyPress", "ArrowRight");
            }
        }
    });
}