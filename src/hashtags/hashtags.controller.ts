import { Controller, Get, Param } from '@nestjs/common';

@Controller('hashtags')
export class HashtagsController {
    @Get("/")
    getHashTags(): string {
        return 'get all hashtags';
    }

    @Get("/:tag/posts")
    getPostsForHashTag(@Param() params): string{
        return `get all posts for ${params.tag}`;
    }
}
