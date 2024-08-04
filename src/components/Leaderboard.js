const Leaderboard = () => {
  return (
    <div className="flex my-4 flex-col justify-center items-center">
      <h1 className="text-lg">Leaderboard</h1>
      <div className="flex flex-col gap-2 justify-center px-5 w-full">
        <div class="bg-cyan-400 w-[290px] h-[40px] rounded-2xl flex flex-row justify-between">
          <div class="flex flex-row gap-x-3">
            <h1 class="pl-4 py-2 font-bold text-white">1</h1>
            <div class="py-2">
              <img class="w-[24px] h-[24px] rounded-full"
                src="https://i.pinimg.com/564x/a6/58/32/a65832155622ac173337874f02b218fb.jpg" alt=""/>
            </div>
            <h1 class="py-2 font-semibold text-white">Winter</h1>
          </div>
          <div className="pr-2">
            <h1 class="py-2 pr-2 text-center text-white">596 pts</h1>
          </div>
        </div>
        <div class="bg-cyan-500 w-[290px] h-[40px] rounded-2xl flex flex-row justify-between">
          <div class="flex flex-row gap-x-3">
            <h1 class="pl-4 py-2 font-bold text-white">2</h1>
            <div class="py-2">
              <img class="w-[24px] h-[24px] rounded-full"
                src="https://cdn-icons-png.flaticon.com/512/6833/6833605.png" alt=""/>
            </div>
            <h1 class="py-2 font-semibold text-white">Toast</h1>
          </div>
          <div className="pr-2">
            <h1 class="py-2 pr-2 text-center text-white">588 pts</h1>
          </div>
        </div>
        <div class="bg-cyan-600 w-[290px] h-[40px] rounded-2xl flex flex-row justify-between">
          <div class="flex flex-row gap-x-3">
            <h1 class="pl-4 py-2 font-bold text-white">3</h1>
            <div class="py-2">
              <img class="w-[24px] h-[24px] rounded-full"
                src="https://cdn-icons-png.flaticon.com/512/4140/4140052.png" alt=""/>
            </div>
            <h1 class="py-2 font-semibold text-white">Tennor</h1>
          </div>
          <div className="pr-2">
            <h1 class="py-2 pr-2 text-center text-white">338 pts</h1>
          </div>
        </div>
        <div class="bg-cyan-700 w-[290px] h-[40px] rounded-2xl flex flex-row justify-between">
          <div class="flex flex-row gap-x-3">
            <h1 class="pl-4 py-2 font-bold text-white">4</h1>
            <div class="py-2">
              <img class="w-[24px] h-[24px] rounded-full"
                src="https://cdn-icons-png.flaticon.com/512/6997/6997662.png" alt=""/>
            </div>
            <h1 class="py-2 font-semibold text-white">Jenny</h1>
          </div>
          <div className="pr-2">
            <h1 class="py-2 pr-2 text-center text-white">329 pts</h1>
          </div>
        </div>
        <div class="bg-cyan-800 w-[290px] h-[40px] rounded-2xl flex flex-row justify-between">
          <div class="flex flex-row gap-x-3">
            <h1 class="pl-4 py-2 font-bold text-white">5</h1>
            <div class="py-2">
              <img class="w-[24px] h-[24px] rounded-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQoYalG0iZwdwwSFMhNL4aDADjcSJFcuo31Y9OY6saF8ZG5dq3lLc8uXw0eJfUwvdwjTw&usqp=CAU" alt=""/>
            </div>
            <h1 class="py-2 font-semibold text-white">John</h1>
          </div>
          <div className="pr-2">
            <h1 class="py-2 pr-2 text-center text-white">270 pts</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
