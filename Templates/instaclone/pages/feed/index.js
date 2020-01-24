import React, { useState, useEffect, useCallback } from "react";
import { FlatList, View } from "react-native";
import {
  Post,
  Small,
  Header,
  Avatar,
  Name,
  Description,
  PostImage,
  Loading
} from "./styles";
import ImageView from "../blur.image/index";

const LoadPage = () => {
  const [feed, setFeed] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [chngd, setChange] = useState([]);

  async function loadPage(pageNumber = page, shouldRefresh = false) {
    if (pageNumber === totalItems) return;
    setLoading(true);
    const response = await fetch(
      `http://localhost:3000/feed?_expand=author&_limit=4&_page=${pageNumber}`
    );
    const totalItems = response.headers.get("X-Total-Count");
    const data = await response.json();
    setLoading(false);
    setTotal(Math.floor(totalItems / 4));
    setFeed(shouldRefresh ? data : [...feed, ...data]);
    setPage(pageNumber + 1);
  }

  const handleViewChange = useCallback(({ changed }) => {
    setChange(changed.map(({ item }) => item.id));
  }, []);

  useEffect(() => {
    loadPage();
  }, []);

  async function refreshList() {
    setRefreshing(true);
    await loadPage(1, true);
    setRefreshing(false);
  }

  return (
    <View>
      <FlatList
        onEndReached={() => loadPage()}
        onRefresh={refreshList}
        refreshing={refreshing}
        ListFooterComponent={loading && <Loading />}
        key="list"
        data={feed}
        keyExtractor={item => String(item.id)}
        onEndReached={() => loadPage()}
        onEndReachedThreshold={0.1}
        renderItem={({ item }) => (
          <Post>
            <Header>
              <Avatar source={{ uri: item.author.avatar }} />
              <Name>{item.author.name}</Name>
            </Header>
            <ImageView
              smallSource={item.small}
              source={item.image}
              ratio={item.aspectRatio}
            />
            {/* <Small
              source={{ uri: item.small }}
              blurRadius={2}
              ratio={item.aspectRatio}
              resizeMode="contain"
            >
              <PostImage
                source={{ uri: item.image }}
                ratio={item.aspectRatio}
                resizeMode="contain"
              />
            </Small> */}
            <Description>
              <Name>{item.author.name}</Name>
              {item.description}
            </Description>
          </Post>
        )}
      />
    </View>
  );
};

export default LoadPage;
