export default function InventoryUpdate() {
  return (

    <div>

      <h2 className="text-lg font-semibold mb-4">
        Update Inventory
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        <div className="bg-white p-5 rounded-xl shadow">
          <h3 className="font-medium mb-3">Update Blood Stock</h3>

          <button className="bg-red-500 text-white px-4 py-2 rounded-lg">
            Update
          </button>
        </div>

        <div className="bg-white p-5 rounded-xl shadow">
          <h3 className="font-medium mb-3">Manage Medicine Supply</h3>

          <button className="bg-primary text-white px-4 py-2 rounded-lg">
            Manage
          </button>
        </div>

      </div>

    </div>
  );
}