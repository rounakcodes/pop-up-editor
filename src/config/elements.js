const elements = [
  {
    id: 1,
    type: "img",
    content: "Element 1",
    style: {
      top: "5%",
      left: "50%",
      transform: "translateX(-50%)",
      width: "5.5vw",
      height: "5.5vw",
      "max-height": "55px",
      "max-width": "55px",
    },
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA3CAYAAABZ0InLAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMuSURBVHgB7ZpbTttQEIb/cS4qUh9gBZgVNFVbiPpkdgArAHbQrqDJCgorgB20S0ifSulD6QqaHZCHVkBu05lQq04IieeQc4ilfJLl2LKdfJlzmTkJsKLYEALBnKzf4vdhBOoMUGqt0XkbASgjEANc/yihFOvrErgtuy0EIEIAuvzmkIE4PZZmE+s5BCBIE+3zzq+soCLH7Sp98x5F7xGcjF5KqCh6j+C06KWEiKLXCD4UvZQQUfQawVnRS/EdRW8RnBe9FN9R9CYYIfqQ91pCdABPeBHMG70MSY9fJ/CAF0FL9P5TcrhnPgsXdIheipcoLlzQLXopi4/iwgS1WrjhnXeO0UtJbvnVHhaIeR685nocYVhjDGVfigm8SaDaI8WmcSlbR577c4hBW/aXAym1ntP3S8tDpgoGlHAlt/yYoAwQNelDn5ZIxIRmRcBwv5oRHeuDMuGeFlVO0axIHD5mz40JitwGCg+vZ48mRtHoGAWHEZ1kj8cEq/RVBKmJwsLNKp2fZc9MHUV7XG/IxV5SJ39ws0IXjcmzD86DxZKcLqfMnOiLICkD43spmB8cO+ZmMsssyaCjyT43Sa5Urcv1Q8lmTrFE5JFTcueiyySZV04xJdvLIGmRU8zVxNNJckem7f0KnbcsdzktG/Z5e09GL5GkdQSBpXLg3aqxVFKcCt4yXXwWuTbC0XaRUx5T0dcQjhiOOAl2+W1IOWhX0CIcDjgJRujHCIyuMMABJ8FB2OY5QqaHGA449kEKLigf9AUccGyi2ER4EjhgFtT1TzxBEyXHkdQseIOb4HIpLiOpWbCCYaDs5T4lDBIYMQsOQQkckFTrizS0Xd3uXrsQmVuP+Y9AZBzNVEbWKhtSdbcypxNN2iMppC3rsPKs3NemmJPtHm9f5UmydZVZlvuP5mX/FlGX3/NNgjqC9nF9NfOa0fI5NS01m5JXtIy1DaJWBzkx9cHZI6jWa9SsYO2lVU7Re8oSHS1oafQlTaeHPzEMLCCCo0L0pIxnx5Zvdvb71OM+oIX1wWRE+6Atr/9U1FU27Yd3W73xb+L3gop2efusxzus79eVH1ixYsWKFcvEX1a3XFQhi2ZVAAAAAElFTkSuQmCC",
  },
  {
    id: 2,
    type: "img",
    content: "Element 2",
    style: {
      top: "7%",
      left: "40%",
      transform: "translateX(-50%)",
      width: "4vw",
      height: "4vw",
      "max-height": "40px",
      "max-width": "40px",
    },
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA3CAYAAABZ0InLAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMuSURBVHgB7ZpbTttQEIb/cS4qUh9gBZgVNFVbiPpkdgArAHbQrqDJCgorgB20S0ifSulD6QqaHZCHVkBu05lQq04IieeQc4ilfJLl2LKdfJlzmTkJsKLYEALBnKzf4vdhBOoMUGqt0XkbASgjEANc/yihFOvrErgtuy0EIEIAuvzmkIE4PZZmE+s5BCBIE+3zzq+soCLH7Sp98x5F7xGcjF5KqCh6j+C06KWEiKLXCD4UvZQQUfQawVnRS/EdRW8RnBe9FN9R9CYYIfqQ91pCdABPeBHMG70MSY9fJ/CAF0FL9P5TcrhnPgsXdIheipcoLlzQLXopi4/iwgS1WrjhnXeO0UtJbvnVHhaIeR685nocYVhjDGVfigm8SaDaI8WmcSlbR577c4hBW/aXAym1ntP3S8tDpgoGlHAlt/yYoAwQNelDn5ZIxIRmRcBwv5oRHeuDMuGeFlVO0axIHD5mz40JitwGCg+vZ48mRtHoGAWHEZ1kj8cEq/RVBKmJwsLNKp2fZc9MHUV7XG/IxV5SJ39ws0IXjcmzD86DxZKcLqfMnOiLICkD43spmB8cO+ZmMsssyaCjyT43Sa5Urcv1Q8lmTrFE5JFTcueiyySZV04xJdvLIGmRU8zVxNNJckem7f0KnbcsdzktG/Z5e09GL5GkdQSBpXLg3aqxVFKcCt4yXXwWuTbC0XaRUx5T0dcQjhiOOAl2+W1IOWhX0CIcDjgJRujHCIyuMMABJ8FB2OY5QqaHGA449kEKLigf9AUccGyi2ER4EjhgFtT1TzxBEyXHkdQseIOb4HIpLiOpWbCCYaDs5T4lDBIYMQsOQQkckFTrizS0Xd3uXrsQmVuP+Y9AZBzNVEbWKhtSdbcypxNN2iMppC3rsPKs3NemmJPtHm9f5UmydZVZlvuP5mX/FlGX3/NNgjqC9nF9NfOa0fI5NS01m5JXtIy1DaJWBzkx9cHZI6jWa9SsYO2lVU7Re8oSHS1oafQlTaeHPzEMLCCCo0L0pIxnx5Zvdvb71OM+oIX1wWRE+6Atr/9U1FU27Yd3W73xb+L3gop2efusxzus79eVH1ixYsWKFcvEX1a3XFQhi2ZVAAAAAElFTkSuQmCC",
  },
  {
    id: 3,
    type: "img",
    content: "Element 3",
    style: {
      top: "7%",
      left: "60%",
      transform: "translateX(-50%)",
      width: "4vw",
      height: "4vw",
      "max-height": "40px",
      "max-width": "40px",
    },
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA3CAYAAABZ0InLAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMuSURBVHgB7ZpbTttQEIb/cS4qUh9gBZgVNFVbiPpkdgArAHbQrqDJCgorgB20S0ifSulD6QqaHZCHVkBu05lQq04IieeQc4ilfJLl2LKdfJlzmTkJsKLYEALBnKzf4vdhBOoMUGqt0XkbASgjEANc/yihFOvrErgtuy0EIEIAuvzmkIE4PZZmE+s5BCBIE+3zzq+soCLH7Sp98x5F7xGcjF5KqCh6j+C06KWEiKLXCD4UvZQQUfQawVnRS/EdRW8RnBe9FN9R9CYYIfqQ91pCdABPeBHMG70MSY9fJ/CAF0FL9P5TcrhnPgsXdIheipcoLlzQLXopi4/iwgS1WrjhnXeO0UtJbvnVHhaIeR685nocYVhjDGVfigm8SaDaI8WmcSlbR577c4hBW/aXAym1ntP3S8tDpgoGlHAlt/yYoAwQNelDn5ZIxIRmRcBwv5oRHeuDMuGeFlVO0axIHD5mz40JitwGCg+vZ48mRtHoGAWHEZ1kj8cEq/RVBKmJwsLNKp2fZc9MHUV7XG/IxV5SJ39ws0IXjcmzD86DxZKcLqfMnOiLICkD43spmB8cO+ZmMsssyaCjyT43Sa5Urcv1Q8lmTrFE5JFTcueiyySZV04xJdvLIGmRU8zVxNNJckem7f0KnbcsdzktG/Z5e09GL5GkdQSBpXLg3aqxVFKcCt4yXXwWuTbC0XaRUx5T0dcQjhiOOAl2+W1IOWhX0CIcDjgJRujHCIyuMMABJ8FB2OY5QqaHGA449kEKLigf9AUccGyi2ER4EjhgFtT1TzxBEyXHkdQseIOb4HIpLiOpWbCCYaDs5T4lDBIYMQsOQQkckFTrizS0Xd3uXrsQmVuP+Y9AZBzNVEbWKhtSdbcypxNN2iMppC3rsPKs3NemmJPtHm9f5UmydZVZlvuP5mX/FlGX3/NNgjqC9nF9NfOa0fI5NS01m5JXtIy1DaJWBzkx9cHZI6jWa9SsYO2lVU7Re8oSHS1oafQlTaeHPzEMLCCCo0L0pIxnx5Zvdvb71OM+oIX1wWRE+6Atr/9U1FU27Yd3W73xb+L3gop2efusxzus79eVH1ixYsWKFcvEX1a3XFQhi2ZVAAAAAElFTkSuQmCC",
  },
  {
    id: 4,
    type: "span",
    content:
      "All the text and elements in this popup should be editable and dragable",
    style: {
      top: "20%",
      left: "50%",
      transform: "translateX(-50%)",
      height: "9vw",
      maxHeight: "90px",
      "font-weight": "700px",
      color: "white",
      width: "80%",
      "max-width": "400px",
      "font-size": "2em",
      padding: "0.7em",
      "padding-top": "0.1em",
      border: "2px solid #3498db",
    },
  },
  {
    id: 5,
    type: "input",
    content: "Element 5",
    placeholder: "E-mail",
    style: {
      top: "45%",
      "font-size": "24px",
      border: "2px solid #3498db",
      "border-radius": "5px",
      outline: "none",
      transition: "border-color 0.3s ease",
      left: "80px",
      right: "80px",
      height: "5vw",
      maxHeight: "50px",
      "line-height": 0.5,
    },
  },
  {
    id: 6,
    type: "button",
    content: "SIGNUP NOW",
    style: {
      top: "65%",
      display: "inline-block",
      padding: "15px 30px",
      "font-size": "min(3vw, 30px)",
      "font-weight": "bold",
      "text-align": "center",
      "text-decoration": "none",
      "border-radius": "8px",
      transition: "background-color 0.3s ease, color 0.3s ease",
      color: "#fff",
      "background-color": "#3A3A3C",
      cursor: "pointer",
      left: "80px",
      right: "80px",
      height: "8vw",
      maxHeight: "80px",
    },
  },
  {
    id: 7,
    type: "span",
    content:
      "No credit card required. No Surprises",
    style: {
      top: "80%",
      left: "50%",
      transform: "translateX(-50%)",
      height: "5vw",
      maxHeight: "50px",
      "font-weight": "700px",
      color: "white",
      width: "80%",
      "max-width": "400px",
      "font-size": "1.5em",
      padding: "0.7em",
      "padding-top": "0.1em",
    },
  },
];
export default elements;
