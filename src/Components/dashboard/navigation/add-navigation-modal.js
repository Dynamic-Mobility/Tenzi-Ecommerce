import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { toast } from "react-toastify";
import { createStoreNavigation } from "@/Redux/Services/Navigation";
import { getAllMenus } from "@/Redux/Features/menus";
import { useDispatch } from "react-redux";

export default function AddNavigationModal() {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const initialValues = {
    title: "",
    menuItems: [
      {
        name: "string",
      },
    ],
  };

  const handleCreateNavigation = async (formValue, helpers) => {
    console.log("FORM_VALUE ", formValue);
    try {
      const { title, name } = formValue;
      const updatedMenuItems = [
        {
          name: name,
        },
      ];

      const updatedFormValues = {
        title: title,
        menuItems: updatedMenuItems,
      };
      await createStoreNavigation(updatedFormValues).then(() => {
        helpers.resetForm();
        dispatch(getAllMenus());
        toast.success("Menu Added Successfully!");
        handleClose();
      });
    } catch (err) {
      toast.error(err);
      console.log(err);
    }
  };

  return (
    <div>
      <p onClick={handleClickOpen} className="cursor-pointer text-link">
        Add Menu
      </p>
      <Dialog
        open={open}
        maxWidth="sm"
        fullWidth
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Add Navigation Menu"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Formik
              initialValues={initialValues}
              onSubmit={handleCreateNavigation}
            >
              <Form>
                <section className="space-y-2">
                  <div>
                    <label htmlFor="menus[0].title">Menu Title</label>
                    <Field
                      name="title"
                      placeholder="Title"
                      className="border my-2 border-gray px-4 py-3 text-sm rounded-xl focus:outline-none w-full"
                      type="text"
                    />
                    <Field
                      name="name"
                      placeholder="Name"
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
