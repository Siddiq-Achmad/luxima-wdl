import { useState, useContext } from "react";
import {
  Button,
  Modal,
  Input,
  Textarea,
  Avatar,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalContent,
  useDisclosure,
  Divider,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "@heroui/react";
import { useBlogContext } from "@/context/BlogContext";
import { CommentDots } from "../icons";

const BlogComment = () => {
  const { blog } = useBlogContext();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const handleSubmit = () => {};

  return (
    <div className="mt-8">
      <Card className="p-6 ">
        <CardHeader className="justify-between mb-4">
          <h2 className="text-xl font-semibold ">Comments</h2>
          <CommentDots className="w-6 h-6 text-neutral-600" />
        </CardHeader>
        {/* Display Existing Comments */}
        <CardBody className="px-3 py-1 mb-4 text-small text-default-400">
          <div className="comments-list space-y-6">
            {blog?.comments ? (
              blog.comments.map((c, index) => (
                <div
                  key={index}
                  className="flex items-start justify-between space-x-6"
                >
                  <Avatar
                    src={c.avatar || "https://via.placeholder.com/150"}
                    alt={c.user}
                    size="lg"
                    isBordered
                    radius="lg"
                    className="flex-grow w-16 w-2/10 md:w-1/12 h-16 mt-2"
                  />
                  <div className="flex-shrink w-10/12 md:w-11/12 text-small">
                    <h4 className="font-semibold text-md">{c.user}</h4>
                    <p className="text-sm text-gray-500 font-light">
                      {c.createdAt}
                    </p>
                    <p className="mt-2 font-light">{c.content}</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="flex justify-center items-center">
                <p className="text-gray-500 ">
                  No comments yet. Be the first to comment!
                </p>
              </div>
            )}
          </div>
        </CardBody>
        <CardFooter className="flex justify-between">
          <Button color="primary" onPress={onOpen}>
            Add Comment
          </Button>
          <p className="text-sm font-light">
            {blog?.comments?.length} comments
          </p>
        </CardFooter>
      </Card>

      {/* Comment Modal */}
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} backdrop="blur">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>
                <h3 className="text-xl font-bold" id="modal-title">
                  Add a Comment
                </h3>
              </ModalHeader>
              <ModalBody>
                <Input
                  fullWidth
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <Input
                  fullWidth
                  placeholder="Email (optional)"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Textarea
                  fullWidth
                  placeholder="Your Comment"
                  rows={4}
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cancel
                </Button>
                <Button color="primary" onPress={handleSubmit}>
                  Submit
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default BlogComment;
