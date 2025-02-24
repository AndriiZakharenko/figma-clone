"use client";

import { fabric } from "fabric";

import LeftSidebar from "@/components/LeftSidebar";
import Live from "@/components/Live";
import Navbar from "@/components/Navbar";
import RightSidebar from "@/components/RightSidebar";
import { useEffect, useRef, useState } from "react";
import {
  handleCanvasMouseDown,
  // handleResize,
  initializeFabric,
} from "@/lib/canvas";
import { ActiveElement } from "@/types/type";
import { handleImageUpload } from "@/lib/shapes";
import { useMutation, useStorage } from "@/liveblocks.config";

const Page = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fabricRef = useRef<fabric.Canvas | null>(null);
  const isDrawing = useRef(false);
  const shapeRef = useRef<fabric.Object | null>(null);
  const selectedShapeRef = useRef<string | null>("rectangle");
  const imageInputRef = useRef<HTMLInputElement>(null);

  const canvasObjects = useStorage((root) => root.canvasObjects);

  const syncShapeInStorage = useMutation(({ storage }, object) => {
    if (!object) return;
    const { objectId } = object;
    const shapeData = object.toJSON();
    shapeData.objectId = objectId;

    const canvasObjects = storage.get("canvasObjects");
    canvasObjects.set(objectId, shapeData);
  }, []);

  const [activeElement, setActiveElement] = useState<ActiveElement>({
    name: "",
    value: "",
    icon: "",
  });

  const handleActiveElement = (elem: ActiveElement) => {
    setActiveElement(elem);

    selectedShapeRef.current = elem?.value as string;
  };

  useEffect(() => {
    const canvas = initializeFabric({ canvasRef, fabricRef });

    canvas.on("mouse: down", (options) => {
      handleCanvasMouseDown({
        options,
        canvas,
        isDrawing,
        shapeRef,
        selectedShapeRef,
      });
    });

    // window.addEventListener("resize", () => {
    //   handleResize({ fabricRef });
    // });
  }, []);

  return (
    <main className="h-screen overflow-hidden">
      <Navbar
      imageInputRef={imageInputRef}
        activeElement={activeElement}
        handleActiveElement={handleActiveElement}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        handleImageUpload={(e: any) => {
          e.stopPropagation();

          handleImageUpload({
            file: e.target.files[0],
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            canvas: fabricRef as any,
            shapeRef,
            syncShapeInStorage,
          });
        }}
      />

      <section className="flex h-full flex-row">
      <LeftSidebar allShapes={Array.from(canvasObjects)} />

        <Live canvasRef={canvasRef} />

        <RightSidebar />
      </section>
    </main>
  );
};

export default Page;
