import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Formik, Field, Form } from "formik";
import { toast } from "react-toastify";
import { createStoreNavigation } from "@/Redux/Services/Navigation";
import { BiEdit } from "react-icons/bi";

const convertMenuItemsToString = (menuItems) => {
    return menuItems.map(item => item?.name).join(", ");
  };

export default function EditNavigationModal({ menu }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  

  const handleClose = () => {
    setOpen(false);
  };

  const initialValues = {
    title: menu.title,
    menuItems: convertMenuItemsToString(menu.menuItems || []),
  };

  const handleCreateNavigation = async (formValues, helpers) => {
    console.log("FORM_VALUES ", formValues);
    try {
      // Convert the comma-separated string back to an array of objects before submission
      const updatedMenuItems = formValues.menuItems.split(", ").map(name => ({ name }));

      const updatedFormValues = {
        ...formValues,
        menuItems: updatedMenuItems,
      };

      // Handle form submission here
      await createStoreNavigation(updatedFormValues).then(() => {
        helpers.resetForm();
        toast.success("Menu Updated Successfully!");
        handleClose();
      });
    } catch (err) {
      toast.error(err);
      console.log(err);
    }
  };

  return (
    <div>
      <BiEdit onClick={handleClickOpen} title="edit" className="cursor-pointer" />
      <Dialog
        open={open}
        maxWidth="sm"
        fullWidth
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Edit Navigation Menu"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Formik initialValues={initialValues} onSubmit={handleCreateNavigation}>
              <Form>
                <section className="space-y-2">
                  <div>
                    <label htmlFor="title">Menu Title</label>
                    <Field
                      name="title"
                      placeholder="Title"
                      className="border my-2 border-gray px-4 py-3 text-sm rounded-xl focus:outline-none w-full"
                      type="text"
                    />
                    <Field
                      name="menuItems"
                      placeholder="Name1, Name2, Name3"
                      className="border border-gray px-4 py-3 text-sm rounded-xl focus:outline-none w-full"
                      type="text"
                    />
                  </div>
                  <div className="flex items-center justify-end">
                    <button
                      type="submit"
                      className="bg-black text-white rounded px-3 py-2 text-sm"
                    >
                      Submit
                    </button>
                  </div>
                </section>
              </Form>
            </Formik>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
