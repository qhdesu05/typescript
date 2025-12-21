export { };
//xay dung chung chung(tong quat)
class SinhVien {
    //thuoc tinh (dac mieu)
    name: string | undefined;
    id: number | undefined;

    //hanh vi
    sleep() {
        console.log("Sinh vien dang ngu", this.name, "and id = ", this.id); //this: tham chieu den .name va .id 
    };
}

//object (clone => chi tiet)
const sinhvien1 = new SinhVien();
sinhvien1.name = "quanghoang";
sinhvien1.id = 1;
sinhvien1.sleep();
console.log("==========================");

const sinhvien2 = new SinhVien();
sinhvien1.name = "thanh hoa";
sinhvien1.id = 3;
sinhvien1.sleep();