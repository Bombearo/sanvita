import ProductOptions from "./productOptions";

function OptionsPage() {
    return <div>
        <div className="flex flex-col justify-center items-center mb-4 ">
            <h1>Product Options</h1>
            <p> With 203 sizes, 5 handle types, and 4 packing options - there is always one that fits your needs</p>
        </div>
        <ProductOptions />
    </div>;
}

export default OptionsPage;