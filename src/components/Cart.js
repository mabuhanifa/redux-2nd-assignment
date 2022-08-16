import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/actions/cartActions";

const Cart = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { qty: aqty } = state.asus;
  const { qty: dqty } = state.dell;
  const { qty: cqty } = state.canon;
  console.log(state, state.cart);
  const total = aqty + dqty + cqty;
  const incre = (id) => {
    dispatch(increment(id));
  };
  const decre = (id) => {
    dispatch(decrement(id));
  };
  return (
    <div className="bg-gray-50 h-full md:h-screen">
      <div className="grid place-items-center">
        <h1 className="text-gray-900 font-bold text-3xl p-10 underline decoration-purple-500 decoration-4 underline-offset-8 mb-4">
          Shopping Cart
        </h1>
      </div>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-8 xxl:col-span-8">
          <div className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
            <div className="flex justify-between px-4 items-center">
              <div className="text-lg font-semibold">
                <p>Asus Vivobook X515MA (20)</p>
                <p className="text-gray-400 text-base">Tk 35,500</p>
              </div>
              <div className="text-lg font-semibold">
                {/* ----------------button---------------- */}
                <button
                  onClick={() => incre({ id: "asus" })}
                  className="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-2 rounded-full inline-flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
            <div className="flex justify-between px-4 items-center">
              <div className="text-lg font-semibold">
                <p>Dell E1916HV 18.5 Inch (35)</p>
                <p className="text-gray-400 text-base">Tk 9,300</p>
              </div>
              <div className="text-lg font-semibold">
                {/* ----------------button---------------- */}
                <button
                  onClick={() => incre({ id: "dell" })}
                  className="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-2 rounded-full inline-flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
            <div className="flex justify-between px-4 items-center">
              <div className="text-lg font-semibold">
                <p>Canon Eos 4000D 18MP (72)</p>
                <p className="text-gray-400 text-base">Tk 36,500</p>
              </div>
              <div className="text-lg font-semibold">
                {/* ----------------button---------------- */}
                <button
                  onClick={() => incre({ id: "canon" })}
                  className="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-2 rounded-full inline-flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-4 xxl:col-span-4">
          <div className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
            <div className="flex justify-between border-b-2 mb-2">
              <div className="text-lg py-2">
                <p>Asus Vivobook X515MA</p>
              </div>
              <div className="text-lg py-2">
                <div className="flex flex-row space-x-2 w-full items-center rounded-lg">
                  {/* ----------------button---------------- */}
                  <button
                    onClick={() => decre({ id: "asus" })}
                    className="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M18 12H6"
                      />
                    </svg>
                  </button>
                  <p>{aqty}</p>
                  {/* ----------------button---------------- */}
                  <button
                    onClick={() => incre({ id: "asus" })}
                    className="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div className="flex justify-between border-b-2 mb-2">
              <div className="text-lg py-2">
                <p>Dell E1916HV 18.5 Inch</p>
              </div>
              <div className="text-lg py-2">
                <div className="flex flex-row space-x-2 w-full items-center rounded-lg">
                  {/* ----------------button---------------- */}
                  <button
                    onClick={() => decre({ id: "dell" })}
                    className="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M18 12H6"
                      />
                    </svg>
                  </button>
                  <p>{dqty}</p>
                  {/* ----------------button---------------- */}
                  <button
                    onClick={() => incre({ id: "dell" })}
                    className="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div className="flex justify-between border-b-2 mb-2">
              <div className="text-lg py-2">
                <p>Canon Eos 4000D 18MP</p>
              </div>
              <div className="text-lg py-2">
                <div className="flex flex-row space-x-2 w-full items-center rounded-lg">
                  {/* ----------------button---------------- */}
                  <button
                    onClick={() => decre({ id: "canon" })}
                    className="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M18 12H6"
                      />
                    </svg>
                  </button>
                  <p>{cqty}</p>
                  {/* ----------------button---------------- */}
                  <button
                    onClick={() => incre({ id: "canon" })}
                    className="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center text-center">
              <div className="text-xl font-semibold">
                <p>Total Item</p>
                {/* -----------------total items----------------- */}
                <p className="text-5xl">{total}</p>
              </div>
            </div>
          </div>
          <div className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
            <div className="flex justify-center items-center text-center">
              <div className="text-xl font-semibold">
                <p>Total Price</p>
                {/* -----------------price----------------- */}
                <p className="text-5xl">{aqty}</p>
                <p className="text-5xl">{dqty}</p>
                <p className="text-5xl">{cqty}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
