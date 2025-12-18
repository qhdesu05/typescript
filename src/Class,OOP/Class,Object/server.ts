export{};
//class : dinh nghia tong quat, mieu ta chung chung
class Lion{
    //mieu ta dac diem
    name :string="A";
    color : string | undefined;

    //mieu ta hanh vi
    sleep(){
        console.log("Lion is sleeping", this.name);
    }
}

//mieu ta cu the tung lion => object
//clone : new
const sutu1 = new Lion();
sutu1.color = "white";
sutu1.name = "quanghoang";
sutu1.sleep();

console.log("=======");

const sutu2 = new Lion();
sutu1.color = "black";
sutu1.name = "thanhhoa";
sutu1.sleep();