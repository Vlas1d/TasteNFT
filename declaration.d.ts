declare module '*.png';
declare module '*.jpg?as=webp';
declare module '*.png?as=webp';
declare module '*.jpeg?as=webp';
declare module '*.module.scss' {
    const classes: { [key: string]: string };
    export default classes;
}