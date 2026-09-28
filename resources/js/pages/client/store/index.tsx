import HomeLayout from "@/layouts/home/home-layout";
import SingleProduct from "@/components/ui/single-product";

export default function Index() {
    return (
        <HomeLayout>
            <div className={'container mx-auto py-8'}>
                <div className="grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
                    <SingleProduct/>
                    <SingleProduct/>
                    <SingleProduct/>
                    <SingleProduct/>
                    <SingleProduct/>
                    <SingleProduct/>
                    <SingleProduct/>
                    <SingleProduct/>
                    <SingleProduct/>
                </div>
            </div>
        </HomeLayout>
    )
}