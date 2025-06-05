import ProductOptions from "./productOptions";

function OptionsPage() {
    return <div>
        <h1 className="text-4xl font-bold mb-4">Product Options</h1>
        <p className="text-lg text-gray-700 mb-6">
            Explore the various options available for our products, including needle diameters, gauges, and lengths.
        </p>
        <ProductOptions />
    </div>;
}

export default OptionsPage;