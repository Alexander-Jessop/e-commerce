import Card from "../UI/Card";

const ProductReview = () => {
  const generateRandomRating = () => {
    return Math.floor(Math.random() * 5) + 1;
  };

  const generateRandomComment = () => {
    const comments = [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      "Nullam scelerisque mi et ultrices vestibulum.",
      "Sed posuere nisi a nisi suscipit commodo.",
      "Fusce ultricies mauris sit amet diam feugiat, vitae finibus metus lobortis.",
      "Proin maximus nisl vel justo faucibus placerat.",
    ];

    return comments[Math.floor(Math.random() * comments.length)];
  };

  const generateRandomProfilePicture = () => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const randomLetter = letters[Math.floor(Math.random() * letters.length)];

    return randomLetter;
  };

  return (
    <div className="flex flex-wrap justify-center gap-4 max-w-[90rem]">
      {Array.from({ length: 4 }).map((_, index) => (
        <Card key={index} className="p-4 w-[30rem] min-h-[10rem]">
          <div className="flex items-center mb-2">
            <div className="bg-primary rounded-full h-8 w-8 flex items-center justify-center mr-2">
              <span className="text-white font-bold text-lg">
                {generateRandomProfilePicture()}
              </span>
            </div>
            <div>
              <p className="font-bold">User Name</p>
              <div className="flex items-center">
                {Array.from({ length: generateRandomRating() }).map(
                  (_, index) => (
                    <svg
                      key={index}
                      className="w-5 h-5 fill-current text-yellow-500 mr-1"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2L14.1386 7.4902H20.2102L15.526 10.8773L17.6646 16.3675L12 13.0944L6.33538 16.3675L8.47395 10.8773L3.78975 7.4902H9.86136L12 2Z" />
                    </svg>
                  )
                )}
              </div>
            </div>
          </div>
          <p>{generateRandomComment()}</p>
        </Card>
      ))}
    </div>
  );
};

export default ProductReview;
