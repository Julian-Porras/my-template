import { Fragment } from "react";
import { Card1 } from "../components/Card";
import { ButtonComponent, PrimaryButton } from "../components/Buttons";

export default function ButtonsPage() {
  return (
    <Fragment>
      <div className="flex flex-row items-start justify-between">
        <h1 className="md:text-2xl text-xl uppercase font-semibold mb-4">
          Buttons
        </h1>
      </div>
      <Card1 style={"h-full"}>
        <div className="flex flex-row flex-wrap justify-start gap-4 mb-4">
          <ButtonComponent
            label={"Button 1"}
            style={
              "w-fit rounded-sm py-2 px-4 border border-sky-800 text-sky-800 hover:bg-sky-100"
            }
          />
          <ButtonComponent
            label={"Button 2"}
            style={
              "w-fit rounded-sm py-2 px-4 border border-gray-400 text-gray-500 hover:bg-gray-100"
            }
          />
          <ButtonComponent
            label={"Button 3"}
            style={
              "w-fit rounded-sm py-2 px-4 border border-green-500 text-green-600 hover:bg-green-100"
            }
          />
          <ButtonComponent
            label={"Button 4"}
            style={
              "w-fit rounded-sm py-2 px-4 border border-blue-500 text-blue-600 hover:bg-blue-100"
            }
          />
          <ButtonComponent
            label={"Button 5"}
            style={
              "w-fit rounded-sm py-2 px-4 border border-yellow-500 text-yellow-600 hover:bg-yellow-50"
            }
          />
          <ButtonComponent
            label={"Button 6"}
            style={
              "w-fit rounded-sm py-2 px-4 border border-red-500 text-red-600 hover:bg-red-100"
            }
          />
          <ButtonComponent
            label={"Button 7"}
            style={
              "w-fit rounded-sm py-2 px-4 border border-indigo-700 text-indigo-800 hover:bg-indigo-100"
            }
          />
        </div>
        <div className="flex flex-row flex-wrap justify-start gap-4 mb-4">
          <ButtonComponent
            label={"Button 1"}
            style={
              "w-fit rounded-md py-2 px-4 border border-sky-800 text-sky-800 hover:bg-sky-100"
            }
          />
          <ButtonComponent
            label={"Button 2"}
            style={
              "w-fit rounded-md py-2 px-4 border border-gray-400 text-gray-500 hover:bg-gray-100"
            }
          />
          <ButtonComponent
            label={"Button 3"}
            style={
              "w-fit rounded-md py-2 px-4 border border-green-500 text-green-600 hover:bg-green-100"
            }
          />
          <ButtonComponent
            label={"Button 4"}
            style={
              "w-fit rounded-md py-2 px-4 border border-blue-500 text-blue-600 hover:bg-blue-100"
            }
          />
          <ButtonComponent
            label={"Button 5"}
            style={
              "w-fit rounded-md py-2 px-4 border border-yellow-500 text-yellow-600 hover:bg-yellow-50"
            }
          />
          <ButtonComponent
            label={"Button 6"}
            style={
              "w-fit rounded-md py-2 px-4 border border-red-500 text-red-600 hover:bg-red-100"
            }
          />
          <ButtonComponent
            label={"Button 7"}
            style={
              "w-fit rounded-md py-2 px-4 border border-indigo-700 text-indigo-800 hover:bg-indigo-100"
            }
          />
        </div>
        <div className="flex flex-row flex-wrap justify-start gap-4 mb-4">
          <ButtonComponent
            label={"Button 1"}
            style={
              "w-fit rounded-lg py-2 px-4 border border-sky-800 text-sky-800 hover:bg-sky-100"
            }
          />
          <ButtonComponent
            label={"Button 2"}
            style={
              "w-fit rounded-lg py-2 px-4 border border-gray-400 text-gray-500 hover:bg-gray-100"
            }
          />
          <ButtonComponent
            label={"Button 3"}
            style={
              "w-fit rounded-lg py-2 px-4 border border-green-500 text-green-600 hover:bg-green-100"
            }
          />
          <ButtonComponent
            label={"Button 4"}
            style={
              "w-fit rounded-lg py-2 px-4 border border-blue-500 text-blue-600 hover:bg-blue-100"
            }
          />
          <ButtonComponent
            label={"Button 5"}
            style={
              "w-fit rounded-lg py-2 px-4 border border-yellow-500 text-yellow-600 hover:bg-yellow-50"
            }
          />
          <ButtonComponent
            label={"Button 6"}
            style={
              "w-fit rounded-lg py-2 px-4 border border-red-500 text-red-600 hover:bg-red-100"
            }
          />
          <ButtonComponent
            label={"Button 7"}
            style={
              "w-fit rounded-lg py-2 px-4 border border-indigo-700 text-indigo-800 hover:bg-indigo-100"
            }
          />
        </div>
        <div className="flex flex-row flex-wrap justify-start gap-4 mb-4">
          <ButtonComponent
            label={"Button 1"}
            style={
              "w-fit rounded-full py-2 px-4 border border-sky-800 text-sky-800 hover:bg-sky-100"
            }
          />
          <ButtonComponent
            label={"Button 2"}
            style={
              "w-fit rounded-full py-2 px-4 border border-gray-400 text-gray-500 hover:bg-gray-100"
            }
          />
          <ButtonComponent
            label={"Button 3"}
            style={
              "w-fit rounded-full py-2 px-4 border border-green-500 text-green-600 hover:bg-green-100"
            }
          />
          <ButtonComponent
            label={"Button 4"}
            style={
              "w-fit rounded-full py-2 px-4 border border-blue-500 text-blue-600 hover:bg-blue-100"
            }
          />
          <ButtonComponent
            label={"Button 5"}
            style={
              "w-fit rounded-full py-2 px-4 border border-yellow-500 text-yellow-600 hover:bg-yellow-50"
            }
          />
          <ButtonComponent
            label={"Button 6"}
            style={
              "w-fit rounded-full py-2 px-4 border border-red-500 text-red-600 hover:bg-red-100"
            }
          />
          <ButtonComponent
            label={"Button 7"}
            style={
              "w-fit rounded-full py-2 px-4 border border-indigo-700 text-indigo-800 hover:bg-indigo-100"
            }
          />
        </div>
        <div className="flex flex-row flex-wrap justify-start gap-4 mb-4">
          <ButtonComponent
            label={"Button 1"}
            style={
              "w-fit rounded-sm py-2 px-4 bg-sky-900 text-white hover:bg-sky-800"
            }
          />
          <ButtonComponent
            label={"Button 2"}
            style={
              "w-fit rounded-sm py-2 px-4 bg-gray-500 text-white hover:bg-gray-400"
            }
          />
          <ButtonComponent
            label={"Button 3"}
            style={
              "w-fit rounded-sm py-2 px-4 bg-green-600 text-white hover:bg-green-500"
            }
          />
          <ButtonComponent
            label={"Button 4"}
            style={
              "w-fit rounded-sm py-2 px-4 bg-blue-600 text-white hover:bg-blue-500"
            }
          />
          <ButtonComponent
            label={"Button 5"}
            style={
              "w-fit rounded-sm py-2 px-4 bg-yellow-500 text-white hover:bg-yellow-400"
            }
          />
          <ButtonComponent
            label={"Button 6"}
            style={
              "w-fit rounded-sm py-2 px-4 bg-red-500 text-white hover:bg-red-400"
            }
          />
          <ButtonComponent
            label={"Button 7"}
            style={
              "w-fit rounded-sm py-2 px-4 bg-indigo-700 text-white hover:bg-indigo-600"
            }
          />
        </div>
        <div className="flex flex-row flex-wrap justify-start gap-4 mb-4">
          <ButtonComponent
            label={"Button 1"}
            style={
              "w-fit rounded-md py-2 px-4 bg-sky-900 text-white hover:bg-sky-800"
            }
          />
          <ButtonComponent
            label={"Button 2"}
            style={
              "w-fit rounded-md py-2 px-4 bg-gray-500 text-white hover:bg-gray-400"
            }
          />
          <ButtonComponent
            label={"Button 3"}
            style={
              "w-fit rounded-md py-2 px-4 bg-green-600 text-white hover:bg-green-500"
            }
          />
          <ButtonComponent
            label={"Button 4"}
            style={
              "w-fit rounded-md py-2 px-4 bg-blue-600 text-white hover:bg-blue-500"
            }
          />
          <ButtonComponent
            label={"Button 5"}
            style={
              "w-fit rounded-md py-2 px-4 bg-yellow-500 text-white hover:bg-yellow-400"
            }
          />
          <ButtonComponent
            label={"Button 6"}
            style={
              "w-fit rounded-md py-2 px-4 bg-red-500 text-white hover:bg-red-400"
            }
          />
          <ButtonComponent
            label={"Button 7"}
            style={
              "w-fit rounded-md py-2 px-4 bg-indigo-700 text-white hover:bg-indigo-600"
            }
          />
        </div>
        <div className="flex flex-row flex-wrap justify-start gap-4 mb-4">
          <ButtonComponent
            label={"Button 1"}
            style={
              "w-fit rounded-lg py-2 px-4 bg-sky-900 text-white hover:bg-sky-800"
            }
          />
          <ButtonComponent
            label={"Button 2"}
            style={
              "w-fit rounded-lg py-2 px-4 bg-gray-500 text-white hover:bg-gray-400"
            }
          />
          <ButtonComponent
            label={"Button 3"}
            style={
              "w-fit rounded-lg py-2 px-4 bg-green-600 text-white hover:bg-green-500"
            }
          />
          <ButtonComponent
            label={"Button 4"}
            style={
              "w-fit rounded-lg py-2 px-4 bg-blue-600 text-white hover:bg-blue-500"
            }
          />
          <ButtonComponent
            label={"Button 5"}
            style={
              "w-fit rounded-lg py-2 px-4 bg-yellow-500 text-white hover:bg-yellow-400"
            }
          />
          <ButtonComponent
            label={"Button 6"}
            style={
              "w-fit rounded-lg py-2 px-4 bg-red-500 text-white hover:bg-red-400"
            }
          />
          <ButtonComponent
            label={"Button 7"}
            style={
              "w-fit rounded-lg py-2 px-4 bg-indigo-700 text-white hover:bg-indigo-600"
            }
          />
        </div>
        <div className="flex flex-row flex-wrap justify-start gap-4 mb-4">
          <ButtonComponent
            label={"Button 1"}
            style={
              "w-fit rounded-full py-2 px-4 bg-sky-900 text-white hover:bg-sky-800"
            }
          />
          <ButtonComponent
            label={"Button 2"}
            style={
              "w-fit rounded-full py-2 px-4 bg-gray-500 text-white hover:bg-gray-400"
            }
          />
          <ButtonComponent
            label={"Button 3"}
            style={
              "w-fit rounded-full py-2 px-4 bg-green-600 text-white hover:bg-green-500"
            }
          />
          <ButtonComponent
            label={"Button 4"}
            style={
              "w-fit rounded-full py-2 px-4 bg-blue-600 text-white hover:bg-blue-500"
            }
          />
          <ButtonComponent
            label={"Button 5"}
            style={
              "w-fit rounded-full py-2 px-4 bg-yellow-500 text-white hover:bg-yellow-400"
            }
          />
          <ButtonComponent
            label={"Button 6"}
            style={
              "w-fit rounded-full py-2 px-4 bg-red-500 text-white hover:bg-red-400"
            }
          />
          <ButtonComponent
            label={"Button 7"}
            style={
              "w-fit rounded-full py-2 px-4 bg-indigo-700 text-white hover:bg-indigo-600"
            }
          />
        </div>
      </Card1>
    </Fragment>
  );
}
