"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { app } from "@/firebaseConfig";
import {
  collection,
  getFirestore,
  doc,
  setDoc,
  addDoc,
} from "firebase/firestore";

import React, { useEffect, useState } from "react";
import { toast } from "sonner";

function PopUpDetails() {
  const db = getFirestore(app);

  const [isOpen, setIsOpen] = React.useState(false);
  const [date, setDate] = useState("");
  const [uname, setUname] = useState("");
  const [uemail, setUemail] = useState("");

  useEffect(() => {
    setDate(new Date().toLocaleString());
  }, []);

  const handleSubmit = async () => {
    console.log("Submitting data:", { name: uname, email: uemail, date });

    await addDoc(collection(db, "userData"), {
      name: uname,
      email: uemail,
      timestamp: date,
    });
    console.log("Document successfully written!");
    setIsOpen(false);
    toast.success("Thanks for the like", {
      description: date,
    });
  };

  return (
    <div>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger>
          <button onClick={() => setIsOpen(true)}>❤️</button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Lemme me know you</DialogTitle>
            <DialogDescription>
              Don&apos;t worry, I&apos;m not a stalker. I just want to know you
              better.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                
                onChange={(e) => setUname(e.target.value)}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="email" className="text-right">
                Email
              </Label>
              <Input
                id="email"
                
                onChange={(e) => setUemail(e.target.value)}
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant={"outline"} onClick={handleSubmit}>
              Submit
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default PopUpDetails;
