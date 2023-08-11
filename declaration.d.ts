declare module '*.png';
declare module '*.svg';
declare module '*.jpeg';
declare module '*.jpg';
declare module '*.webp';
declare module '*.jpg?as=webp';
declare module '*.png?as=webp';
declare module '*.jpeg?as=webp';
declare module '*.module.scss' {
    const classes: { [key: string]: string };
    export default classes;
}