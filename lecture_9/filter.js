export default class Filter {
    apply(canvas, filter, ...args) {
        const ctx = canvas.getContext('2d');
        const pixels = filter(
            ctx.getImageData(0, 0, canvas.width, canvas.height),
            ...args
        );
        ctx.putImageData(pixels, 0, 0);
        return pixels;
    }

    sepia(pixels) {
        const data = pixels.data;
        for(let i =0; i < data.length; i+=4){
            const r = data[i];
            const g = data[i+1];
            const b = data[i+2];
            data[i] = (r * .394) + (g * .723) + (b * .109);
            data[i+1] = (r * .324) + (g * .653) + (b * .119);
            data[i+2] = (r * .234) + (g * .523) + (b * .131);
        }
        return pixels;
    }

    brightnes(pixels, ratio){

    }
}