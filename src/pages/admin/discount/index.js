import Layout from "@/Components/admin/layout";
import CreateDiscountDialog from "@/Components/dashboard/create-discount-modal";
import React from "react";

const Discounts = () => {
  return (
    <section className="space-y-4">
      <h1 className="text-xl font-semibold">Discounts</h1>
      <div className="flex items-center justify-center h-[70vh]">
        <section className="bg-white w-full h-[60vh] rounded shadow-xl p-4 flex items-center justify-center">
          <div className="space-y-3">
            <h1 className="text-center font-semibold">
              Manage Discounts and Promotions
            </h1>
            <p className="text-center">
              Create discount codes and automatic discounts tha apply at
              checkout
            </p>
            <div className="flex items-center justify-center">
              <CreateDiscountDialog />
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

Discounts.getLayout = (page) => <Layout>{page}</Layout>;

export default Discounts;
