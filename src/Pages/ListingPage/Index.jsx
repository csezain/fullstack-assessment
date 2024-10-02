import ProductCard from "@/components/ProducCard";
import { Button } from "@/components/ui/button";
import { Loader } from "lucide-react";
import React, { useEffect, useState } from "react";

const ListingPage = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isPageLoading, setIsPageLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [isError, setIsError] = useState(null);

  const controller = new AbortController();
  const signal = controller.signal;

  const fetchProducts = (pageNumber, isNextPage = false) => {
    if (!isNextPage) setIsLoading(true);
    else setIsPageLoading(true);

    setIsError(null);

    fetch(`https://fakestoreapi.com/products?limit=10&page=${pageNumber}`, {
      signal,
    })
      .then((res) => res.json())
      .then((data) => {
        if (isNextPage) {
          setProducts((prevProducts) => [...prevProducts, ...data]);
        } else {
          setProducts(data);
        }
      })
      .catch((error) => {
        setIsError(error.message);
      })
      .finally(() => {
        if (!isNextPage) setIsLoading(false);
        else setIsPageLoading(false);
      });
  };

  useEffect(() => {
    fetchProducts(page);

    return () => {
      controller.abort();
    };
  }, []);

  const handleNextPage = () => {
    setPage((prev) => {
      fetchProducts(prev + 1, true);

      return prev + 1;
    });
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-20">
        <Loader className="animate-spin" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex justify-center items-center py-20">
        <p>Error: {isError}</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-10">
      <h1 className="text-2xl font-bold text-foreground/80">Listing Page</h1>
      <section className="grid grid-cols-4 gap-2 mt-10">
        {products &&
          products.map((product, ind) => (
            <ProductCard key={ind} {...product} />
          ))}
      </section>

      <footer className="mt-2 flex justify-end">
        <Button size="sm" onClick={handleNextPage} disabled={isPageLoading}>
          {isPageLoading ? "Loading..." : "Next Page"}
        </Button>
      </footer>
    </div>
  );
};

export default ListingPage;
