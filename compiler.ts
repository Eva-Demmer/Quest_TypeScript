function hello(name: string): void {
    console.log("Hello " + name);
}

const firstName: string = "Bob ";

hello(firstName);
hello (firstName + "Marley");

function concat(a: string, b: string): string {
    return a + b;
}

const wcs: string = concat("Wild", concat("Code", "School"));
console.log(wcs);